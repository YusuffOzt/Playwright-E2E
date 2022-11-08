import { expect } from "@playwright/test";
import aggregatorApi from "api-aggregator/api-aggregator";
import { faker } from "@faker-js/faker";

export const AggregatorIdentity = {
  States: {
    createdEmail: {} as string,
    createdPassword: {} as string,
    createdSignupUser: {} as any,
  },
  API: {
    Signup: {
      run: async () => {
        let data = {
          email: faker.fake(
            "yusuf.{{lorem.word}}{{random.numeric(10)}}@domain.com"
          ),
          password: faker.internet.password(10, true, /[A-Z]/, "Crowd.1"),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          token: "string",
        };
        AggregatorIdentity.States.createdSignupUser = data;
        AggregatorIdentity.States.createdEmail = data.email;
        AggregatorIdentity.States.createdPassword = data.password;
        let res = await aggregatorApi.Identity.apiV1IdentitySignupPost(
          AggregatorIdentity.States.createdSignupUser,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        expect(res.status).toBe(200);
      },
    },
  },
};

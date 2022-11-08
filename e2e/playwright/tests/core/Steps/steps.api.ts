import coreApi from "api-core/api-core";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";
import { Lookups } from "../Lookups/lookups.api";
import moment from "moment";
import { Users } from "../Users/users.api";
let startDate = moment().add(5, "minutes").format().substring(0, 19);
let endDate = moment().add(50, "minutes").format().substring(0, 19);

export const Steps = {
  States: {
    createdStep: {} as any,
    createdStepId: {} as string,
    updatedStep: {} as any,
  },
  API: {
    CreateStep: {
      id: 0,
      notes: "creates an step",
      run: async () => {
        await Lookups.API.GetTimezones.run();
        await Users.API.GetStepGroups.run();
        let data = {
          name: faker.name.firstName(),
          type: 1,
          startDate: startDate,
          endDate: endDate,
          timezoneId: Lookups.States.timezoneId
        };
        Steps.States.createdStep = data;
        let res = await coreApi.Steps.apiV1CaEventsPost(
          Steps.States.createdStep
        );
        expect(res.status).toBe(200);
       Steps.States.createdStepId = res.data;
      },
    },
    GetCreatedStep: {
      id: 1,
      notes: "checks created step",
      run: async () => {
        await Users.API.GetStepGroups.run();
        let res = await coreApi.Steps.apiV1CaEventsGet(
          `eventGroupId==${Users.States.userStepId},(name|description)@=*${Steps.States.createdStep.name}`,
          "-startDate"
        );
        expect(res.data.items[0].id).toBe(Steps.States.createdStepId);
        expect(res.data.items[0].name).toBe(Steps.States.createdStep.name);
        expect(res.data.items[0].type).toBe("OSP");
        expect(res.data.items[0].timezone).toBe(Lookups.States.timezoneName);
        expect(res.status).toBe(200);
      },
    },
    UpdateStep: {
      id: 2,
      notes: "updates a step",
      run: async () => {
        await Lookups.API.GetTags.run();
        let data = {
          eventId: Steps.States.createdStepId,
          name: Steps.States.createdStep.name,
          description: faker.lorem.words(),
          startDate: Steps.States.createdStep.startDate,
          endDate: Steps.States.createdStep.endDate,
          allDayPeriod: true,
          tagIds: [
            Lookups.States.advertisingTagId,
            Lookups.States.environmentTagId,
          ],
          timezoneId: Lookups.States.timezoneId,
        };
        Steps.States.updatedStep = data;
        let res = await coreApi.Steps.apiV1CaEventsIdPut(
          Steps.States.createdStepId,
          Steps.States.updatedStep
        )
        expect(res.status).toBe(204)
      },
    },
    GetUpdatedStep: {
      id: 3,
      notes: "checks updated step",
      run: async () => {
        let res = await coreApi.Steps.apiV1CaEventsIdGet(
          `${Steps.States.updatedStep.stepId}`
        );
        expect(res.data.id).toBe(Steps.States.updatedStep.stepId);
        expect(res.data.name).toBe(Steps.States.updatedStep.name);
        expect(res.data.timezone).toBe(Lookups.States.timezoneName);
        expect(res.data.isAnyoneRegistered).toBe(false);
        expect(res.status).toBe(200);
      },
    },
     
  },
};

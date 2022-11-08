import axios from "axios";
import FormData from "form-data";
import { AggregatorIdentity } from "../../aggregator/identity/identity-aggregator.api";
var fs = require("fs");
const environment = JSON.parse(fs.readFileSync(process.env.ENV, "utf8"));
const { url } = { url: environment.env.signInUrl };
const formDataSignin = new FormData();
export const Identity = {
  States: {},
  API: {
    Signin: {
      id: 0,
      notes: "gets token",
      run: async () => {
        await AggregatorIdentity.API.Signup.run();

        formDataSignin.append(
          "userName",
          AggregatorIdentity.States.createdEmail
        );
        formDataSignin.append(
          "password",
          AggregatorIdentity.States.createdPassword
        );
        let res = await axios({
          method: "POST",
          url: url,
          data: formDataSignin,
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        fs.writeFileSync(
          "./fixtures/cookie.json",
          JSON.stringify(res.headers["set-cookie"])
        );
      },
    },
  },
};

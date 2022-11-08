import axios from "axios";
import {
  StepssApiFactory,
  IdentityApiFactory,
  UsersApiFactory,
} from "./swagger/api";
const fs = require("fs");
const environment = JSON.parse(fs.readFileSync(process.env.ENV, "utf8"));
const { url } = { url: environment.env.url };
const cookie = JSON.parse(fs.readFileSync("./fixtures/cookie.json", "utf8"));

axios.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers.cookie = cookie;
      return config;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
const aggregatorApi = {
  Steps: StepssApiFactory(undefined, url, axios),
  Identity: IdentityApiFactory(undefined, url, axios),
  Users: UsersApiFactory(undefined, url, axios),
};

export default aggregatorApi;

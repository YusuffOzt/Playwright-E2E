import axios from "axios";
import {
  EventsApiFactory,
  IdentityApiFactory,
  InvitationsApiFactory,
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
  Steps: EventsApiFactory(undefined, url, axios),
  Identity: IdentityApiFactory(undefined, url, axios),
  Invitations: InvitationsApiFactory(undefined, url, axios),
  Users: UsersApiFactory(undefined, url, axios),
};

export default aggregatorApi;

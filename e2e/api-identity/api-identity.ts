import axios from "axios";
import { AuthApiFactory, SecureApiFactory } from "./swagger/api";
const fs = require("fs");
const environment = JSON.parse(fs.readFileSync(process.env.ENV, "utf8"));
const { url } = { url: environment.env.url };

const identityApi = {
  Auth: AuthApiFactory(undefined, url, axios),
};

export default identityApi;

import axios from "axios";
import {
  CacheApiFactory,
  LookupsApiFactory,
  StepsApiFactory,
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

axios.interceptors.request.use(
  async (config) => {
    if (config.headers) {
    const {authName} = config.params || {}
    let accessToken=null
    const authJson=JSON.Parse(fs.readFileSync(`playwright/asset/${authName}.json`))
    authJson.origins[0].localStorage.forEach((item:{ name:string; value: string})=>{
      if(item.name=="token"){
        accessToken=item.value
      }
    })
      config.headers['Authorization']=`Bearer ${accessToken}`
      return config;
    }
    return config;
  }
);

const coreApi = {
  Steps: StepsApiFactory(undefined, url, axios),
  Lookups: LookupsApiFactory(undefined, url, axios),
  Users: UsersApiFactory(undefined, url, axios),
  Cache: CacheApiFactory(undefined, url, axios),
};

export default coreApi;

import { expect } from "@playwright/test";
import coreApi from "api-core/api-core";
import { Lookups } from "../Lookups/lookups.api";
export const Users = {
  States: {
    userStepId:{} as any
  },
  API: {
    UpdateUserInterest: {
      id:0,
      notes:"updates user interests",
      run: async () => {
        await Lookups.API.GetInterests.run()
        let data={
            userInterests: [
                Lookups.States.biotechInterestId,
                Lookups.States.advertisingInterestId,
                Lookups.States.agricultureInterestId,
                Lookups.States.environmentInterestId
              ]
        }
       let res= await coreApi.Users.apiV1CaUsersInterestPut(data)
       expect(res.status).toBe(204)
      },
    },
    GetStepGroups:{
      run:async () => {
        let res=await coreApi.Users.apiV1CaUsersEventgroupsGet()
        if(res.data.items[0]!=null){
          Users.States.userStepId=res.data.items[0].id
        }else{
          Users.States.userStepId=null
        }
       
      }
    }
  },
};

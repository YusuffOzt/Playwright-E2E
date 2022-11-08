import coreApi from "api-core/api-core";
export const Lookups = {
  States: {
    advertisingInterestId: {} as string,
    agricultureInterestId: {} as string,
    biotechInterestId: {} as string,
    environmentInterestId: {} as string,
    advertisingTagId: {} as string,
    agricultureTagId:{} as string,
    biotechTagId:{} as string,
    environmentTagId:{} as string,
    timezoneId: {} as string,
    timezoneName:{} as string,
    advertisingTagName:{} as string,
    agricultureTagName:{} as string,
    biotechTagName:{} as string,
    environmentTagName:{} as string,

  },
  API: {
    GetInterests: {
      id: 0,
      notes: "gets user interests",
      run: async () => {
        let res = await coreApi.Lookups.apiV1CaLookupsInterestsGet();
        Lookups.States.advertisingInterestId = res.data.items[1].id;
        Lookups.States.agricultureInterestId = res.data.items[2].id;
        Lookups.States.biotechInterestId = res.data.items[3].id;
        Lookups.States.environmentInterestId = res.data.items[10].id;
      },
    },
    GetTags: {
      id: 0,
      notes: "gets user interests",
      run: async () => {
        let res = await coreApi.Lookups.apiV1CaLookupsTagsGet();
        Lookups.States.advertisingTagId = res.data.items[1].id;
        Lookups.States.advertisingTagName = res.data.items[1].name;
        Lookups.States.agricultureTagId = res.data.items[2].id;
        Lookups.States.agricultureTagName = res.data.items[2].name;
        Lookups.States.biotechTagId = res.data.items[3].id;
        Lookups.States.biotechTagName = res.data.items[3].name;
        Lookups.States.environmentTagId = res.data.items[10].id;
        Lookups.States.environmentTagName = res.data.items[10].name;
      },
    },
    GetTimezones: {
      id: 0,
      notes: "gets timezones",
      run: async () => {
        let res = await coreApi.Lookups.apiV1CaLookupsTimezonesGet();
        Lookups.States.timezoneId = res.data[15].id;
        Lookups.States.timezoneName = res.data[15].name;
      },
    },
  },
};

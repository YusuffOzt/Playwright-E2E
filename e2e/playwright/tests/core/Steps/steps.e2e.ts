

export const Login = {
  States: {
    createdStep: {} as any,
    createdStepId: {} as string,
    updatedStep: {} as any,
  },
  E2E:{
    NavigateToUrl: {
      id: 0,
      notes: "navigates to login url",
      run: async ({page}) => {
          await page.goto('https://playwright.dev/');
      },
    }
  }
};





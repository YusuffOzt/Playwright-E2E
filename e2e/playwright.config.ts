import { type PlaywrightTestConfig, devices } from "@playwright/test";
const config: PlaywrightTestConfig = {
  reporter: [ ['html', { outputFolder: 'report' }] ],
  use: {
    headless: false,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: ["--disable-web-security"],
        },
      },
    },
    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     launchOptions: {
    //       args: ["--disable-web-security"],
    //     },
    //   },
    // },
    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //     launchOptions: {
    //       args: ["--disable-web-security"],
    //     },
    //   },
    // },
  ],
};
export default config;

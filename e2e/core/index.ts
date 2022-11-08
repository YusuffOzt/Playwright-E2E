import { test } from "@playwright/test";

const Core = {
  create(name: string, config: any) {
    return (() => {
      if (config.API) {
        test.describe(`${name}`, async () => {
        config.beforeAll && test.beforeAll(config.beforeAll);
        config.afterAll && test.afterAll(config.afterAll);
        config.beforeEach && test.beforeEach(config.beforeEach);
        config.afterEach && test.afterEach(config.afterEach);
          await Promise.all(
            Object.keys(config.API).map((t) => {
              let testContent = config.API[t];
              let desc = `API- ${t} - #${testContent.id}# - ${testContent.notes}`;
              let skip = testContent.skip || config.API.skip;
              let only = testContent.only;
              if (skip) {
                test.skip(desc, async () => {
                  return testContent.run();
                });
              }
              if (only) {
                test.only(desc, async () => {
                  return testContent.run();
                });
              }
              if (!skip && !only) {
                test(desc, async () => {
                  return testContent.run();
                });
              }
            })
          );
        });
      }
      if (config.E2E) {
        test.describe(`${name}`, async () => {
          await Promise.all(
            Object.keys(config.E2E).map((c) => {
              let testContent = config.E2E[c];
              let desc = `E2E- ${c} - #${testContent.id}# - ${testContent.notes}`;
              let skip = testContent.skip || config.E2E.skip;
              let only = testContent.only;
              if (skip) {
                test.skip(desc, async () => {
                  return testContent.run();
                });
              }
              if (only) {
                test.only(desc, async () => {
                  return testContent.run();
                });
              }
              if (!skip && !only) {
                test(desc, async ({ page }) => {
                  return testContent.run({ page });
                });
              }
            })
          );
        });
      }
    })();
  },
};

export default Core;

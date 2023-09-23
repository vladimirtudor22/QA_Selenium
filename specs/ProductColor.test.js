import { Builder, By, Capabilities, Key } from "selenium-webdriver";
import { describe, it } from "mocha";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();
let title = "";
describe("Product Color Test", () => {
  it("Can open browser to TextBox", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/SPIDERCASE-Protector-Shockproof-Anti-Drop-Protective/dp/B09DSVV1TC/ref=sr_1_1_sspa?crid=3KMCHOJNHKQGA&keywords=iphone%2B12%2Bcase&qid=1695482206&sprefix=iphone%2B1%2Bcase%2Caps%2C182&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    );
  });
  for (let i = 0; i <= 30; i++) {
    it(`Can press on color ${i}`, async () => {
      await driver.findElement(By.id(`color_name_${i}`)).click();
    });
  }

  it("Quit session", async () => {
    await driver.quit();
  });
});

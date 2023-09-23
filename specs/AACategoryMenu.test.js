import { Builder, By, Capabilities, Key } from "selenium-webdriver";
import { describe, it } from "mocha";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();
describe("Category Test", () => {
  it("Can open browser to TextBox", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
  });
  it(`Can press on menu hamburger`, async () => {
    await driver.findElement(By.id(`nav-hamburger-menu`)).click();
  });
  it("Can press on electronics", async () => {
    await driver.findElement(By.css('[data-menu-id="5"]')).click();
    await driver.sleep(1000);
  });
  it("Can press on Accessories & Supplies", async () => {
    await driver
      .findElement(By.xpath('//*[@id="hmenu-content"]/ul[5]/li[3]/a'))
      .click();
  });

  it("Quit session", async () => {
    await driver.quit();
  });
});

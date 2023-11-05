import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});
var productsIDs = [];
describe("Navigation between pages", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://practicesoftwaretesting.com/#/");
  });
  beforeEach(async () => {
    driver.sleep(200);
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to navigate to second page", async () => {
    const secondPage = await driver.findElement(
      By.xpath(
        `/html/body/app-root/div/app-overview/div[3]/div[2]/div[2]/pagination-controls/pagination-template/nav/ul/li[4]/a/span[2]`
      )
    );
    await secondPage.click();
  });
  it("Should be able to navigate to third page", async () => {
    const thirdPage = await driver.findElement(
      By.xpath(
        `/html/body/app-root/div/app-overview/div[3]/div[2]/div[2]/pagination-controls/pagination-template/nav/ul/li[5]/a/span[2]`
      )
    );
    await thirdPage.click();
  });
  it("Should be able to navigate to first page", async () => {
    const firstPage = await driver.findElement(
      By.xpath(
        `/html/body/app-root/div/app-overview/div[3]/div[2]/div[2]/pagination-controls/pagination-template/nav/ul/li[3]/a/span[2]`
      )
    );
    await firstPage.click();
  });
});

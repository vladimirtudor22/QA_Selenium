import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Sign In", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
    try {
      await driver.findElement(By.id("nav-hamburger-menu")).isDisplayed();
    } catch {
      await driver.navigate().refresh();
    }
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to press on sign in", async () => {
    await driver.findElement(By.id("nav-link-accountList")).click();
    await driver.sleep(1000);
  });
  it("Should be able to type email", async () => {
    await driver
      .findElement(By.id("ap_email"))
      .sendKeys("John.Doe@example.com");
  });
  it("Should be able to click continue", async () => {
    await driver.findElement(By.id("continue"));
  });
});

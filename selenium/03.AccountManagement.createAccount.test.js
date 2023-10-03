import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Create Account", () => {
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
  it("Should be able to press on create account", async () => {
    await driver.findElement(By.id("createAccountSubmit")).click();
    await driver.sleep();
  });
  it("Should be able to type name", async () => {
    await driver.findElement(By.id("ap_customer_name")).sendKeys("John Doe");
  });
  it("Should be able to type email", async () => {
    await driver
      .findElement(By.id("ap_email"))
      .sendKeys("John.Doe@example.com");
  });
  it("Should be able to type password", async () => {
    await driver.findElement(By.id("ap_password")).sendKeys("JohnDoe@12");
  });
  it("Should be able to re-type password", async () => {
    await driver.findElement(By.id("ap_password_check")).sendKeys("JohnDoe@12");
  });
  it("Should be able to press on continue", async () => {
    await driver.findElement(By.id("continue")).click();
  });
  it("Should be able to see already an account with this email.", async () => {
    await driver
      .findElement(By.xpath('//*[@id="register-mase-inlineerror"]/div/div'))
      .isDisplayed();
  });
});

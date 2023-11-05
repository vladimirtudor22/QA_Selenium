import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});
var productsIDs = [];
describe("LogIn", () => {
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
  it("Should de able to open sign in page", async () => {
    const navLogin = await driver.findElement(
      By.css(`[data-test="nav-sign-in"]`)
    );
    await navLogin.click();
  });
  it("Should be able to type wrong email for login", async () => {
    const email = await driver.findElement(By.css(`[data-test="email"]`));
    await email.sendKeys(`TEST_EMAIL_GRESIT_34950390@TEST.TEST`);
  });
  it(`Should be able to type password for login`, async () => {
    const password = await driver.findElement(By.css(`[data-test="password"]`));
    await password.sendKeys(`JohnDoe`);
  });
  it(`Should be able to click on submit button`, async () => {
    const submit = await driver.findElement(
      By.css(`[data-test="login-submit"]`)
    );
    await submit.click();
  });
  it(`Should be able to see wrong credentials error`, async () => {
    const error = await driver.findElement(By.css(`[data-test="login-error"]`));
    await error.isDisplayed();
  });
  it(`Should be able to type correct email address`, async () => {
    const email = await driver.findElement(By.css(`[data-test="email"]`));
    await email.clear();
    await email.sendKeys(`John.Doe.Demo.Vlad@example.com`);
  });
  it(`Should be able to click on submit button`, async () => {
    const submit = await driver.findElement(
      By.css(`[data-test="login-submit"]`)
    );
    await submit.click();
  });
  it("Should be able to navigate to user profile", async () => {
    const nav = await driver.findElement(
      By.css(`'[data-test="nav-user-menu"]'`)
    );
    await nav.click();
  });
  it(`Should be able to click on sign out`, async () => {
    const logout = await driver.findElement(
      By.css(`[data-test="nav-sign-out"]`)
    );
    await logout.click();
  });
});

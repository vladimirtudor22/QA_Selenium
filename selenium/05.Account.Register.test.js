import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});
var productsIDs = [];
describe("Register", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://practicesoftwaretesting.com/#/");
  });
  beforeEach(async () => {
    await driver.sleep(200);
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to open login page", async () => {
    const signIn = await driver.findElement(
      By.css(`[data-test="nav-sign-in"]`)
    );
    await signIn.click();
  });
  it("Should be able to open register page", async () => {
    const register = await driver.findElement(
      By.css(`[data-test="register-link"]`)
    );
    await register.click();
  });
  it("Should be able to complete first name field", async () => {
    const firstName = await driver.findElement(
      By.css(`[data-test="first-name"]`)
    );
    await firstName.sendKeys(`Doe`);
  });
  it("Should be able to complete last name field", async () => {
    const lastName = await driver.findElement(
      By.css(`[data-test="last-name"]`)
    );
    await lastName.sendKeys(`John`);
  });
  it("Should be able to type date of birth", async () => {
    const dob = await driver.findElement(By.css(`[data-test="dob"]`));
    await dob.sendKeys(`1999-10-22`);
  });
  it("Should be able to type address", async () => {
    const address = await driver.findElement(By.css(`[data-test="address"]`));
    await address.sendKeys(`Street test, 10`);
  });
  it("Should be able to type postalCode ", async () => {
    const postalCode = await driver.findElement(
      By.css(`[data-test="postcode"]`)
    );
    await postalCode.sendKeys("910021");
  });
  it("Should be able to type city", async () => {
    const city = await driver.findElement(By.css(`[data-test="city"]`));
    await city.sendKeys("TestCity");
  });
  it("Should be able to type state", async () => {
    const state = await driver.findElement(By.css(`[data-test="state"]`));
    await state.sendKeys("TestState");
  });
  it("Should be able to type country", async () => {
    const country = await driver.findElement(By.css(`[data-test="country"]`));
    await country.sendKeys("Romania");
  });
  it("Should be able to type phone number", async () => {
    const phone = await driver.findElement(By.css(`[data-test="phone"]`));
    await phone.sendKeys("0700000000");
  });
  it("Should be able to type email", async () => {
    const email = await driver.findElement(By.css(`[data-test="email"]`));

    await email.sendKeys("John.Doe.Demo.Vlad@example.com");
  });
  it("Should be able to type password", async () => {
    const password = await driver.findElement(By.css(`[data-test="password"]`));
    await password.sendKeys("JohnDoePass");
  });
  it("Should be able to press on submit button", async () => {
    const submit = await driver.findElement(
      By.css(`[data-test="register-submit"`)
    );
    await driver.sleep(2000);
    await submit.click();
  });
});

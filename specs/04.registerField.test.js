import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

describe("Register Fields", () => {
  it("Should be able to start Chrome", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
  });
  it("Should be able to navigate to register", async () => {
    const startHereButton = await driver.findElement(
      By.id("nav-link-accountList")
    );
    await startHereButton.click();
    await driver.sleep(2000);
    const register = await driver.findElement(By.id("createAccountSubmit"));
    await register.click();
  });
  it("Should be able to fill name input", async () => {
    const nameInput = await driver.findElement(By.id("ap_customer_name"));
    await nameInput.sendKeys("John Doe");
  });
  it("Should be able to fill email input", async () => {
    const emailInput = await driver.findElement(By.id("ap_email"));
    await emailInput.sendKeys("example@example.com");
  });
  it("Should be able to fill password input", async () => {
    const passwordInput = await driver.findElement(By.id("ap_password"));
    await passwordInput.sendKeys("testpassword");
  });
  it("Should be able to fill retype password input", async () => {
    const reenterPasswordInput = await driver.findElement(
      By.id("ap_password_check")
    );
    await reenterPasswordInput.sendKeys("testpassword");
  });
  it("Should be able to submit form", async () => {
    const createAccountButton = await driver.findElement(By.id("continue"));
    await createAccountButton.click();
    await driver.sleep(3000);
  });
  it("Should be able to quit Chrome", async () => {
    await driver.quit();
  });
});

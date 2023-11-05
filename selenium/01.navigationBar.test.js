import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Navigation Bar", () => {
  before(async () => {
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.get("https://practicesoftwaretesting.com/#/");
  });
  beforeEach(async () => {
    await driver.sleep(150);
  });
  it("Should be able to click on navBar - Home", async () => {
    const navHome = await driver.findElement(By.css(`[data-test="nav-home"]`));
    await navHome.click();
  });
  it("Should be able to see HomePage", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "#");
  });
  it("Should be able to press on Categoryes", async () => {
    const categoryes = await driver.findElement(
      By.css(`[data-test="nav-categories"]`)
    );
    await categoryes.click();
  });
  it("Should be able to click on Hand Tools", async () => {
    const handTools = await driver.findElement(
      By.css(`[data-test="nav-hand-tools"]`)
    );
    await handTools.click();
  });
  it("Should be able to see Hand Tools page", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "/category/hand-tools");
  });
  it("Should be able to click on Power Tools Category", async () => {
    const categoryes = await driver.findElement(
      By.css(`[data-test="nav-categories"]`)
    );
    await categoryes.click();
    const powerTools = await driver.findElement(
      By.css(`[data-test="nav-power-tools"]`)
    );
    await powerTools.click();
  });
  it("Should be able to see power tools page", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "/category/power-tools");
  });
  it("Should be able to click on special tools", async () => {
    const categoryes = await driver.findElement(
      By.css(`[data-test="nav-categories"]`)
    );
    await categoryes.click();
    const specialTools = await driver.findElement(
      By.css(`[data-test="nav-special-tools"]`)
    );
    await specialTools.click();
  });
  it("Should be able to see special tools page", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "/category/special-tools");
  });
  it("Should be able to click on rentals", async () => {
    const categoryes = await driver.findElement(
      By.css(`[data-test="nav-categories"]`)
    );
    await categoryes.click();
    const rentals = await driver.findElement(
      By.css(`[data-test="nav-rentals"]`)
    );
    rentals.click();
  });
  it("Should be able to see rentals page", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "/rentals");
  });
  it("Should be able to click on sign in", async () => {
    const signIn = await driver.findElement(
      By.css(`[data-test="nav-sign-in"]`)
    );
    await signIn.click();
  });
  it("Should be able to see Sign In", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "auth/login");
  });
  it("Should be able to click on contact", async () => {
    const contact = await driver.findElement(
      By.css(`[data-test="nav-contact"]`)
    );
    await contact.click();
  });
  it("Should be able to see contact page", async () => {
    const url = await driver.getCurrentUrl();
    assert.include(url, "/contact");
  });
  after(async () => {
    await driver.quit();
  });
});

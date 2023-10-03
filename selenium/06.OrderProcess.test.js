import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Order process", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/Keychron-Wireless-Bluetooth-Mechanical-Keyboard/dp/B07Y9Y69N7/ref=sr_1_3?crid=53IJD81OCJK3&keywords=keychron&qid=1696338116&sprefix=keychron%2Caps%2C231&sr=8-3"
    );
    try {
      await driver.findElement(By.id("nav-hamburger-menu")).isDisplayed();
    } catch {
      await driver.navigate().refresh();
    }
  });
  after(async () => {
    await driver.quit();
  });

  it("Should be able to add item to cart", async () => {
    const addButton = driver.findElement(By.id("add-to-cart-button"));
    await addButton.click();
  });
  it("Should be able to press on checkout button", async () => {
    const checkOutB = await driver.findElement(
      By.name("proceedToRetailCheckout")
    );
    await checkOutB.click();
  });
  it("Should be able to type email", async () => {
    const emailInput = await driver.findElement(By.id("ap_email"));
    await emailInput.sendKeys("John.Doe@example.com");
  });
  it("Should be able to tap on continue", async () => {
    const continueB = await driver.findElement(By.id("continue"));
    await continueB.click();
  });
});

import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Shopping Cart", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/N2-Pro-Infrared-1920x1080P-2560x1440P/dp/B0742J69SQ/ref=sr_1_76?qid=1696331801&s=electronics&sr=1-76"
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

  it("Should be able to add product to cart", async () => {
    await driver.findElement(By.id("add-to-cart-button")).click();
  });
  it("Should be able to open cart", async () => {
    await driver.sleep(500);
    await driver.findElement(By.id("nav-cart-count")).click();
    const divElements = await driver.findElements(By.css("div[data-itemid]"));
    const dataItemId = await divElements[0].getAttribute("data-itemid");
    await driver.findElement(By.name(`submit.delete.${dataItemId}`)).click();
  });
  it("Should be able to add multiple products to cart", async () => {
    await driver.get(
      "https://www.amazon.com/Keychron-Wireless-Bluetooth-Mechanical-Keyboard/dp/B07Y9Y69N7/ref=sr_1_3?crid=1TY0NSD0X7C90&keywords=keychron&qid=1696332759&sprefix=keychron%2Caps%2C194&sr=8-3&th=1"
    );
    await driver.findElement(By.id("add-to-cart-button")).click();
    await driver.get(
      "https://www.amazon.com/Keychron-Wireless-Mechanical-Hot-Swappable-Programmable/dp/B0BHVKJF7R/ref=sr_1_4?crid=1TY0NSD0X7C90&keywords=keychron&qid=1696332759&sprefix=keychron%2Caps%2C194&sr=8-4"
    );
    await driver.findElement(By.id("add-to-cart-button")).click();
    await driver.get(
      "https://www.amazon.com/Keychron-Gasket-Keyboard-Mechanical-Windows/dp/B0CBWJ9SKX/ref=sr_1_5?crid=1TY0NSD0X7C90&keywords=keychron&qid=1696332759&sprefix=keychron%2Caps%2C194&sr=8-5&th=1"
    );
    await driver.findElement(By.id("add-to-cart-button")).click();
  });
  it("Cart should contain 3 products", async () => {
    await driver.findElement(By.id("nav-cart-count")).click();
    const productCount = await driver.executeScript(
      'return document.getElementsByClassName("sc-product-title").length'
    );
    assert.strictEqual(productCount, 3, "Expected 3 products in the cart");
  });
});

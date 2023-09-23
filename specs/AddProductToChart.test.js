import { Builder, By, Capabilities, Key } from "selenium-webdriver";
import { describe, it } from "mocha";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();
describe("Cart Product Test", () => {
  it("Can open browser to TextBox", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/SPIDERCASE-Protector-Shockproof-Anti-Drop-Protective/dp/B09DSVV1TC/ref=sr_1_1_sspa?crid=3KMCHOJNHKQGA&keywords=iphone%2B12%2Bcase&qid=1695482206&sprefix=iphone%2B1%2Bcase%2Caps%2C182&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    );
  });
  it("Can add product to cart", async () => {
    await driver.findElement(By.id("add-to-cart-button")).click();
  });
  it("Should be able to see the item in cart", async () => {
    await driver
      .findElement(
        By.css(
          '[alt="SPIDERCASE Designed for iPhone 12 Case/iPhone 12 Pro Case, [10 FT Military Grade Drop Protection] [with 2 pcs Tempered Glass Screen Protector] Protective Cover for iPhone 12/12 Pro (Black)"]'
        )
      )
      .isDisplayed();
  });
  it("Can delete item from cart", async () => {
    await driver.findElement(By.css('[title="Delete"]')).click();
  });
  it("Should be able to see delete confirmation", async () => {
    await driver
      .findElement(By.className("a-section ewc-item-remove-msg"))
      .isDisplayed();
  });

  it("Quit session", async () => {
    await driver.quit();
  });
});

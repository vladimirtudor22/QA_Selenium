import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Reviews", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/Keychron-Wireless-Bluetooth-Mechanical-Keyboard/dp/B07Y9Y69N7/ref=sr_1_3?crid=3VE26ZVBWYURZ&keywords=keychron&qid=1696339413&sprefix=keycron%2Caps%2C231&sr=8-3&th=1"
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
  it("Should be able to see reviews cards", async () => {
    const elements = await driver.findElements(
      By.css('div[data-hook="review"]')
    );
    for (const element of elements) {
      const elementId = await element.getAttribute("id");
      const review = await driver.findElement(
        By.id(`${elementId}-review-card`)
      );
      await review.isDisplayed();
    }
  });
});

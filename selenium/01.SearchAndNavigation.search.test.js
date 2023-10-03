import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Search product", () => {
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
  it("Should be able to see SearchBox and type 'laptop'", async () => {
    const searchInput = await driver.findElement(By.id("twotabsearchtextbox"));
    await searchInput.sendKeys("laptop");
    await searchInput.sendKeys("\n");
    await driver.sleep(1000);
  });
  it("Should be able to see result section", async () => {
    const searchResults = await driver.findElements(By.css(".s-result-item"));
    assert.isTrue(
      searchResults.length > 0,
      "There is no results for searched term."
    );
  });
});

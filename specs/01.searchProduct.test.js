import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

describe("Search product on Amazon", () => {
  it("Should be able to open google Chrome", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
  });
  it("Should be able to see SearchBox and type 'laptop'", async () => {
    const searchInput = await driver.findElement(By.id("twotabsearchtextbox"));
    await searchInput.sendKeys("laptop");
    await searchInput.sendKeys("\n");
    await driver.sleep(3000);
  });
  it("Should be able to see result section", async () => {
    const searchResults = await driver.findElements(By.css(".s-result-item"));
    assert.isTrue(
      searchResults.length > 0,
      "There is no results for searched term."
    );
  });
  it("Should be able to quit Chrome", async () => {
    await driver.quit();
  });
});

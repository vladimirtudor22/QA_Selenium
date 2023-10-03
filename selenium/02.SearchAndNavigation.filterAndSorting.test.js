import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

describe("Apply Filters to search", () => {
  it("Should be able to open google Chrome", async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
    try {
      await driver.findElement(By.id("nav-hamburger-menu")).isDisplayed();
      console.log("da");
    } catch {
      await driver.navigate().refresh();
      console.log("nu");
    }
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
    await driver.sleep(1000);
  });
  it("Should be able to select HP from filters", async () => {
    await driver
      .findElement(By.xpath('//*[@id="p_89/HP"]/span/a/span'))
      .click();
    await driver.sleep(1000);
  });
  it("Should be able to select any price range", async () => {
    await driver
      .findElement(By.xpath('//*[@id="p_36/1253507011"]/span/a/span'))
      .click();
    await driver.sleep(1000);
  });
  it("Should be able to press on screen size", async () => {
    await driver
      .findElement(
        By.xpath('//*[@id="p_n_size_browse-bin/2423841011"]/span/a/span')
      )
      .click();
    await driver.sleep(1000);
  });
  it("Should be able to quit Chrome", async () => {
    await driver.quit();
  });
});

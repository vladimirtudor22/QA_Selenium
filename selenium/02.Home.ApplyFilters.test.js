import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});

describe("Apply Filters to search", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://practicesoftwaretesting.com/#/");
  });
  beforeEach(async () => {
    driver.sleep(200);
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to sort items from A to Z", async () => {
    const sort = await driver.findElement(By.css(`[data-test="sort"]`));
    await sort.sendKeys("N");
  });
  it("Should be able to change value from the slider (Price Range)", async () => {
    const sliderMax = await driver.findElement(
      By.css(`[aria-label="ngx-slider-max"]`)
    );
    const sliderMin = await driver.findElement(By.css(`[aria-valuenow="1"]`));
    sliderMax.sendKeys(Key.ARROW_LEFT);
    sliderMin.sendKeys(Key.ARROW_RIGHT);
    await driver.sleep(2000);
  });
  it("Should be able to see the difference at slider max value", async () => {
    const sliderMax = await driver.findElement(
      By.xpath(`//*[@id="filters"]/div[1]/ngx-slider/span[10]`)
    );
    const maxValue = await sliderMax.getText();
    assert.notEqual(maxValue, 100);
  });
  it("Should be able to see the difference at slider min value", async () => {
    const sliderMin = await driver.findElement(
      By.xpath(`//*[@id="filters"]/div[1]/ngx-slider/span[9]`)
    );
    const minValue = await sliderMin.getText();
    assert.notEqual(minValue, 1);
  });
  it("Should be able to type in searchBox", async () => {
    const searchbox = await driver.findElement(
      By.css(`[data-test="search-query"]`)
    );
    await searchbox.sendKeys("Hammer", Key.RETURN);
  });
  var ids = [];
  it("Should be able to get all ids", async () => {
    var categoryId;
    const categoryIds = await driver.findElements(
      By.css('[name="category_id"]')
    );
    for (const categoryIdElement of categoryIds) {
      categoryId = await categoryIdElement.getAttribute("data-test");
      ids.push(categoryId);
    }
  });
  it("Should be able to see all filters", async () => {
    for (const idFilter of ids) {
      const filter = await driver.findElement(
        By.css(`[data-test="${idFilter}"]`)
      );
      await filter.isDisplayed();
    }
  });
  it("Should be able to apply all filters", async () => {
    for (const filter of ids) {
      const filterElement = await driver.findElement(
        By.css(`[data-test="${filter}"]`)
      );
      await filterElement.click();
    }
  });
  var bId = [];
  it("Should be able to get all brands", async () => {
    var brandId;
    const brandIds = await driver.findElements(By.css(`[name="brand_id"]`));
    for (const id of brandIds) {
      brandId = await id.getAttribute("data-test");
      bId.push(brandId);
    }
  });
  it("Should be able to press on all brands", async () => {
    for (const element of bId) {
      const item = await driver.findElement(By.css(`[data-test="${element}"]`));
      item.click();
    }
  });
});

import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});
var productsIDs = [];
describe("Navigate to product", () => {
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
  var pIDs = [];
  it("Should be able to get all products IDs", async () => {
    const products = await driver.findElements(
      By.css(`[data-test^='product-']`)
    );
    for (const product of products) {
      pIDs.push(await product.getAttribute("data-test"));
    }
    pIDs = await pIDs.filter(
      (element) => element !== "product-name" && element !== "product-price"
    );
  });
  it("Should be able to tap in first product", async () => {
    const firstProduct = await driver.findElement(
      By.css(`[data-test="${pIDs[0]}"]`)
    );
    await firstProduct.click();
  });
  it("Should be able to see product page", async () => {
    const id = pIDs[0].split("-");
    const url = await driver.getCurrentUrl();
    assert.include(url, id[id.length - 1]);
  });
  it("Should be able to go back", async () => {
    await driver.navigate().back();
  });
  it("Can see Home Page", async () => {
    const element = driver.findElement(By.css(`[data-test="sort"]`));
    await element.isDisplayed();
  });
});

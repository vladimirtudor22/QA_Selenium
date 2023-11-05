import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";
import axios from "axios";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();
var ids = [];
var response;

before(() => {
  global.driver = driver;
});

describe("Product page", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://practicesoftwaretesting.com/#");
  });

  beforeEach(async () => {
    await driver.sleep(500);
  });

  after(async () => {
    await driver.quit();
  });

  it("Should be able to get all ids for products", async () => {
    const products = await driver.findElements(
      By.css(`[data-test*='product-']`)
    );
    for (const product of products) {
      await ids.push(await product.getAttribute("data-test"));
    }
    ids = await ids.filter(
      (element) => element !== "product-name" && element !== "product-price"
    );
  });

  it("Should be able to press on first product", async () => {
    const firstProduct = await driver.findElement(
      By.css(`[data-test="${ids[0]}"]`)
    );
    await firstProduct.click();
  });

  it("Should be able to get product details from the backend", async () => {
    let id = `${ids[0]}`.substring(8);

    try {
      response = await axios.get(
        `https://api.practicesoftwaretesting.com/products/${id}`
      );
    } catch (error) {
      throw error;
    }
  });
  it("Should be able to match name and description with backend", async () => {
    const name = await driver.findElement(By.css(`[data-test="product-name"]`));
    const description = await driver.findElement(
      By.css(`[data-test="product-description"]`)
    );
    const nameText = await name.getText();
    const descriptionText = await description.getText();
    await assert.equal(nameText, response.data.name);
    await assert.equal(descriptionText, response.data.description);
  });
  it("Should be able to go back", async () => {
    await driver.navigate().back();
  });
  it("Should be able to tap on second product", async () => {
    const secondProduct = await driver.findElement(
      By.css(`[data-test="${ids[1]}"]`)
    );
    await secondProduct.click();
  });
  it("Should be able to get product details from the backend", async () => {
    let id = `${ids[1]}`.substring(8);

    try {
      response = await axios.get(
        `https://api.practicesoftwaretesting.com/products/${id}`
      );
    } catch (error) {
      throw error;
    }
  });
  it("Should be able to match name and description with backend", async () => {
    const name = await driver.findElement(By.css(`[data-test="product-name"]`));
    const description = await driver.findElement(
      By.css(`[data-test="product-description"]`)
    );
    const nameText = await name.getText();
    const descriptionText = await description.getText();
    await assert.equal(nameText, response.data.name);
    await assert.equal(descriptionText, response.data.description);
  });
  it("Should be able to increase quantity", async () => {
    const increaseQt = await driver.findElement(
      By.css(`[data-test="increase-quantity"]`)
    );
    await increaseQt.click();
    const quantity = await driver.findElement(By.css(`[data-test="quantity"]`));
    await assert.equal(await quantity.getAttribute("value"), 2);
    await increaseQt.click();
    await assert.equal(await quantity.getAttribute("value"), 3);
  });
  it("Should be able to decrease quantity", async () => {
    const decreaseQt = await driver.findElement(
      By.css(`[data-test="decrease-quantity"]`)
    );
    const quantity = await driver.findElement(By.css(`[data-test="quantity"]`));
    await decreaseQt.click();
    await assert.equal(await quantity.getAttribute("value"), 2);
    await decreaseQt.click();
    await assert.equal(await quantity.getAttribute("value"), 1);
  });
  it("Should be able to click on add product to cart.", async () => {
    const addToChart = await driver.findElement(
      By.css(`[data-test="add-to-cart"]`)
    );
    await addToChart.click();
  });
  it("Should be able to see product added to cart confirmation.", async () => {
    const confirmation = await driver.findElement(By.css(`.toast-body`));
    await confirmation.isDisplayed();
    await driver.sleep(2000);
  });
  it("Should  be able to click on add product to favourites", async () => {
    const addToFav = await driver.findElement(
      By.css(`[data-test="add-to-favorites"]`)
    );
    await addToFav.click();
    await driver.sleep(1000);
  });
  it("Should be able to see Not logged in", async () => {
    const notification = await driver.findElement(By.css(`.toast-body`));
    await assert.include(
      await notification.getText(),
      "Unauthorized, can not add product to your favorite list."
    );
  });
  it("Should be able to navigate to login", async () => {
    const loginNav = await driver.findElement(
      By.css(`[data-test="nav-sign-in"]`)
    );
    await loginNav.click();
  });
  it("Should be able to login", async () => {
    const email = await driver.findElement(By.css(`[data-test="email"]`));
    await email.clear();
    await email.sendKeys(`John.Doe.Demo.Vlad@example.com`);
    const password = await driver.findElement(By.css(`[data-test="password"]`));
    await password.sendKeys(`JohnDoePass`);
    const submit = await driver.findElement(
      By.css(`[data-test="login-submit"]`)
    );
    await submit.click();
  });
  it("Can navigate to first product", async () => {
    const navHome = await driver.findElement(By.css(`[data-test="nav-home"]`));
    await navHome.click();
    const firstProd = await driver.findElement(
      By.css(`[data-test="${ids[0]}"]`)
    );
    await firstProd.click();
  });
  it("Should  be able to click on add product to favourites", async () => {
    const addToFav = await driver.findElement(
      By.css(`[data-test="add-to-favorites"]`)
    );
    await addToFav.click();
    await driver.sleep(1000);
  });
  it("Should be able to see confirmation", async () => {
    const notification = await driver.findElement(By.css(`.toast-body`));
    await assert.include(
      await notification.getText(),
      "Product added to your favorites list."
    );
  });
});

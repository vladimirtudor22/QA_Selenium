import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";
import axios from "axios";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

var ids = [];
describe("Order test", async () => {
  before(async () => {
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.get("https://practicesoftwaretesting.com/#/");
  });
  beforeEach(async () => {
    await driver.sleep(300);
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to press on login", async () => {
    const navLogin = await driver.findElement(
      By.css(`[data-test="nav-sign-in"]`)
    );
    await navLogin.click();
  });
  it("Should be able to type accont and press submit", async () => {
    const email = await driver.findElement(By.css(`[data-test="email"]`));
    await email.clear();
    await email.sendKeys(`testtest@test.ro`);
    const password = await driver.findElement(By.css(`[data-test="password"]`));
    await password.sendKeys(`testtest`);
    const submit = await driver.findElement(
      By.css(`[data-test="login-submit"]`)
    );
    await submit.click();
    await driver.sleep(1000);
  });
  it("Can navigate to home", async () => {
    const navHome = await driver.findElement(By.css(`[id="Layer_1"]`));
    await navHome.click();
  });
  it("Can get all products ids", async () => {
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
    const firstProd = await driver.findElement(
      By.css(`[data-test="${ids[0]}"]`)
    );
    await firstProd.click();
  });
  it("Should be able to press on add to cart", async () => {
    const addToCart = await driver.findElement(
      By.css(`[data-test="add-to-cart"]`)
    );
    await addToCart.click();
  });
  it("Should be able to press on cart", async () => {
    const cart = await driver.findElement(
      By.css(`[data-test="cart-quantity"]`)
    );
    await cart.click();
  });
  it("Should be able to click on continue", async () => {
    const continueBtn = await driver.findElement(
      By.css(`[data-test="proceed-1"]`)
    );
    await continueBtn.click();
  });
  it("Should be able to continue", async () => {
    const continueBtn = await driver.findElement(
      By.css(`[data-test="proceed-2"]`)
    );
    await continueBtn.click();
  });
  it("Should be able to continue", async () => {
    const name = await driver.findElement(By.css(`[data-test="city"]`));
    await name.sendKeys(`test`);
    const continueBtn = await driver.findElement(
      By.css(`[data-test="proceed-3"]`)
    );
    await continueBtn.click();
  });
  it("Can chose gift card payment metod", async () => {
    const method = await driver.findElement(
      By.css(`[data-test="payment-method"]`)
    );
    await method.sendKeys("Gift" + Key.ENTER);
  });
  it("Can type name", async () => {
    const name = await driver.findElement(
      By.css(`[formcontrolname="account_name"]`)
    );
    await name.sendKeys("VladimirTest");
  });
  it("Can type acc number", async () => {
    const accountNumber = await driver.findElement(
      By.css(`[formcontrolname="account_number"]`)
    );
    await accountNumber.sendKeys("1234567890");
  });
  it("Can confirm", async () => {
    const confirm = await driver.findElement(By.css(`[data-test="finish"]`));
    await confirm.click();
  });
  it("Can see confirmation", async () => {
    const notification = await driver.findElement(By.css(`[id="help-block"]`));
    await notification.click();
  });
});

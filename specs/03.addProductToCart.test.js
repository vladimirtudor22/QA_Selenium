import { WebDriver, Builder, By, Capabilities } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

describe("Adăugarea produselor în coș pe Amazon", () => {
  it("Should be able to open Chrome", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://www.amazon.com/");
  });
  it("Should be able to search a product", async () => {
    const searchInput = await driver.findElement(By.id("twotabsearchtextbox"));
    await searchInput.sendKeys("phone\n");
    await driver.sleep(2000);
  });
  it("Should be able to chose first product from the results and click on it", async () => {
    const firstProduct = await driver.findElement(
      By.css('[cel_widget_id="MAIN-SEARCH_RESULTS-2"] img')
    );
    await firstProduct.click();
    await driver.sleep(2000);
  });
  it("Should be able to add this product in cart", async () => {
    const addToCartButton = await driver.findElement(
      By.id("add-to-cart-button")
    );
    await addToCartButton.click();
    await driver.sleep(2000);
  });
  it("Shoud be able to open cart", async () => {
    await driver.get("https://www.amazon.com/gp/cart/view.html");
  });
  it("Should be able to see the product in cart", async () => {
    const cartItems = await driver.findElements(
      By.css(".sc-list-item-content")
    );
    assert.isTrue(cartItems.length > 0, "Product is not present in cart");
  });
  it("Should be able to quit Chrome", async () => {
    await driver.quit();
  });
});

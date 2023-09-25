import { Builder, By, Capabilities, Key } from "selenium-webdriver";
import { describe, it } from "mocha";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();
describe("Cart Product Test", () => {
  it("Can open browser to TextBox", async () => {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get(
      "https://www.amazon.com/Skar-Audio-RP-1200-1D-Monoblock-Amplifier/dp/B078877VVC/ref=sr_1_83?qid=1695620337&s=electronics&sr=1-83&th=1"
    );
  });
  it("Can press on buy now button", async () => {
    await driver.findElement(By.id("buy-now-button")).click();
  });
  it("Should be able to press on Create your Amazon account", async () => {
    await driver.findElement(By.id("createAccountSubmit")).click();
  });
  it("Should be able to type text in Your name input", async () => {
    await driver.findElement(By.id("ap_customer_name")).sendKeys("John Doe");
  });
  it("Should be able to type Mobile number or email", async () => {
    await driver.findElement(By.id("ap_email")).sendKeys("JohnDoe@example.com");
  });
  it("Should be able to type password", async () => {
    await driver.findElement(By.id("ap_password")).sendKeys("PasswordTest");
  });
  it("Should be able to type password", async () => {
    await driver
      .findElement(By.id("ap_password_check"))
      .sendKeys("PasswordTest");
  });
  it("Quit session", async () => {
    await driver.quit();
  });
});

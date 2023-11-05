import { WebDriver, Builder, By, Capabilities, Key } from "selenium-webdriver";
import { assert } from "chai";

const capabilities = Capabilities.chrome();
const driver = await new Builder().withCapabilities(capabilities).build();

before(() => {
  global.driver = driver;
});
describe("Contact page", () => {
  before(async () => {
    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    await driver.get("https://practicesoftwaretesting.com/#/contact");
  });
  beforeEach(async () => {
    driver.sleep(200);
  });
  after(async () => {
    await driver.quit();
  });
  it("Should be able to type first name", async () => {
    const firstName = await driver.findElement(
      By.css('[data-test="first-name"]')
    );
    await firstName.sendKeys("Doe");
  });
  it("Should be able to type last name", async () => {
    const lastName = await driver.findElement(
      By.css('[data-test="last-name"]')
    );
    await lastName.sendKeys("John");
  });
  it("Should be able to type email", async () => {
    const email = await driver.findElement(By.css('[data-test="email"]'));
    await email.sendKeys("John.Doe@example.com");
  });
  it("Should be able to type message", async () => {
    const message = await driver.findElement(By.css('[data-test="message"]'));
    await message.sendKeys("This is a test message.\n Ignore it.");
  });
  it("Should be able to click on submit", async () => {
    const submit = await driver.findElement(
      By.css('[data-test="contact-submit"]')
    );
    await submit.click();
  });
  it("Should be able to see no subject", async () => {
    const subjectErr = await driver.findElement(
      By.css('[data-test="subject-error"]')
    );
    await subjectErr.isDisplayed();
  });
  it("Should be able to type subject", async () => {
    const subject = await driver.findElement(By.css('[data-test="subject"]'));
    await subject.sendKeys("Webmaster");
  });
  it("Shold be able to see message too short error", async () => {
    const error = await driver.findElement(
      By.css('[data-test="message-error"]')
    );
    const text = await error.getText();
    await assert.include(text, "Message must be minimal 50 characters");
    const message = await driver.findElement(By.css('[data-test="message"]'));
    await message.clear();
    await message.sendKeys(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
  });
  it("Should be able to see No first name", async () => {
    const firstName = await driver.findElement(
      By.css('[data-test="first-name"]')
    );
    await firstName.click();
    await firstName.sendKeys(Key.chord(Key.COMMAND, "a"), Key.BACK_SPACE);
    const submit = await driver.findElement(
      By.css('[data-test="contact-submit"]')
    );
    const error = await driver.findElement(
      By.css('[data-test="first-name-error"]')
    );
    await error.isDisplayed();
    await firstName.sendKeys("Doe");
  });
  it("Should be able to see no last name", async () => {
    const lastName = await driver.findElement(
      By.css('[data-test="last-name"]')
    );
    await lastName.click();
    await lastName.sendKeys(Key.chord(Key.COMMAND, "a"), Key.BACK_SPACE);
    const err = await driver.findElement(
      By.css('[data-test="last-name-error"]')
    );
    await err.isDisplayed();
    await lastName.sendKeys("John");
  });
  it("Should be able to see no email", async () => {
    const email = await driver.findElement(By.css('[data-test="email"]'));
    await email.click();
    await email.sendKeys(Key.chord(Key.COMMAND, "a"), Key.BACK_SPACE);
    const err = await driver.findElement(By.css('[data-test="email-error"]'));
    await err.isDisplayed();
    await email.sendKeys("John.Doe@example.com");
  });
  it("Should be able to send contact form", async () => {
    const submit = await driver.findElement(
      By.css('[data-test="contact-submit"]')
    );
    await submit.click();
    const alert = await driver.findElement(By.css('[role="alert"]'));
    await alert.isDisplayed();
  });
});

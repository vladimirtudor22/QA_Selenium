// // https://demoqa.com/text-box
// import { Builder, By, Capabilities, Key } from "selenium-webdriver";
// import { describe, it } from "mocha";

// const capabilities = Capabilities.chrome();
// const driver = await new Builder().withCapabilities(capabilities).build();
// let title = "";
// describe("Search a product", () => {
//   it("Can open browser to TextBox", async () => {
//     await driver.manage().setTimeouts({ implicit: 10000 });
//     await driver.manage().window().setRect({ width: 1920, height: 1080 });
//     await driver.get("https://www.amazon.com");
//   });
//   it("Can type in searchBox 'forza horizon 5'", async () => {
//     await driver
//       .findElement(By.id("twotabsearchtextbox"))
//       .sendKeys("forza horizon 5");
//   });
//   it("Can press on search button", async () => {
//     await driver.findElement(By.id("nav-search-submit-button")).click();
//   });
//   it("Can see first product from search page", async () => {
//     await driver
//       .findElement(By.css('[data-cel-widget="search_result_3"]'))
//       .isDisplayed();
//   });
//   it("Can see desired result and get his text", async () => {
//     const text = await driver
//       .findElement(
//         By.xpath(
//           '//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span'
//         )
//       )
//       .getText();
//     title = text;
//   });
//   it("Can press on desired result", async () => {
//     const text = await driver
//       .findElement(
//         By.xpath(
//           '//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span'
//         )
//       )
//       .click();
//   });
//   it("Quit session", async () => {
//     await driver.quit();
//   });
// });

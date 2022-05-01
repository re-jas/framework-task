// npx wdio --spec ./test\smokeTests\cloduCalculator.smoke.js

const SearchPage = require("../pageobjects/search.page");
const CalculatorPage = require("../pageobjects/calculator.page");

const searchPage = new SearchPage();
const calculatorPage = new CalculatorPage();


describe("Check Add to Estimate GCC", () => {
  it("Open Google Cloud Platform Pricing Calculator", async () => {
    await searchPage.open();
    await searchPage.load("Google Cloud Platform Pricing Calculator");
  });

  it("Quick fill the form", async () => {
    await calculatorPage.quickFillTheForm("1");
  });

  it("Result Block is Displayed", async () => {
    await calculatorPage.resultBlock.waitForDisplayed();
    await await expect(calculatorPage.resultBlock).toBeDisplayed();
  });
});

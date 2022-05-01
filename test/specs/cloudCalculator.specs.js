// npx wdio --spec ./test\specs\cloudCalculator.specs.js

const SearchPage = require("../pageobjects/search.page");
const CalculatorPage = require("../pageobjects/calculator.page");
const TempMailoPage = require("../pageobjects/tempMailo.page");
const EmailEstimate = require("../pageobjects/emailEstimate.page");
const Machine = require("../model/machine");

const searchPage = new SearchPage();
const calculatorPage = new CalculatorPage();
const tempMailoPage = new TempMailoPage();
const emailEstimate = new EmailEstimate();
const machine = new Machine();

describe("Find out cost of Google Cloud", () => {
  it("Open Google Cloud Platform Pricing Calculator", async () => {
    await searchPage.open();
    await searchPage.load("Google Cloud Platform Pricing Calculator");
  });

  it("Fill the form", async () => {
    await calculatorPage.fillTheForm("4");
  });

  it("Region is Iowa", async () => {
    await expect(calculatorPage.regionResult).toHaveTextContaining(
      machine.region
    );
  });

  it("Commitment term is 1 Year", async () => {
    await expect(calculatorPage.commitTermResult).toHaveTextContaining(
      machine.commitmentTerm
    );
  });

  it("VM class is regular", async () => {
    await expect(calculatorPage.vmClassResult).toHaveTextContaining(
      machine.vmClass
    );
  });

  it("Instance type is n1-standard-8", async () => {
    await expect(calculatorPage.instanceTypeResult).toHaveTextContaining(
      machine.instanceType
    );
  });

  it("Local SSD is 2x375 GiB", async () => {
    await expect(calculatorPage.localSsdResult).toHaveTextContaining(
      machine.localSSD
    );
  });

  it("Total Estimated Cost is 5,413.06 per 1 month", async () => {
    await expect(calculatorPage.costReuslt).toHaveTextContaining(
      machine.totalCost
    );
  });

  it("Send the email", async () => {
    let mailCost = await tempMailoPage.receiveMessage();
    await expect(emailEstimate.getFinalCost()).toHaveTextContaining(mailCost);
  });
});

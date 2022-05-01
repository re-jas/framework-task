// npx wdio --spec ./test\specs\pastebin.specs.js -b chrome --ls eager

const PastebinPage = require("../pageobjects/pastebin.page");
const NewCreatedPastePage = require("../pageobjects/createdPaste.page");
const Paste = require("../model/paste");

const pastebinPage = new PastebinPage();
const newCreatedPastePage = new NewCreatedPastePage();
const paste = new Paste();

describe("Create paste in Pastebin", () => {
  
  it("Creation of a New Paste", async () => {
    await pastebinPage.open();
    await pastebinPage.newPaste(paste.code, paste.title);
  });

  it("Browser page title matches Paste Name / Title", async function () {
    await expect(newCreatedPastePage.showPageTitle).toHaveTextContaining(
      paste.title
    );
  });

  it("Syntax is suspended for bash", async function () {
    await expect(newCreatedPastePage.syntaxBox).toHaveTextContaining(
      paste.syntax
    );
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    await expect(newCreatedPastePage.codeBox).toHaveTextContaining(paste.code);
  });
});

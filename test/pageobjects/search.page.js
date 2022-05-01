const Page = require("./page");

class SearchPage extends Page {
  get inputSearch() {
    return $(".devsite-search-field");
  }

  get calculatorLink() {
    return $(
      '//div[@class="gs-title"]//a[@href="https://cloud.google.com/products/calculator"]'
    );
  }

  async load(searchQuery) {
    await this.inputSearch.waitForDisplayed();
    await this.inputSearch.setValue(searchQuery);
    await browser.keys("Enter");
    // choose from search result
    await this.calculatorLink.waitForDisplayed();
    await this.calculatorLink.click();
  }

  open() {
    return super.open("https://cloud.google.com");
  }
}

module.exports = SearchPage;

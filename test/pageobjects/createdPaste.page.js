const Page = require("./page");

class NewCreatedPastePage extends Page {
  get showPageTitle() {
    return $('//div[@class="info-top"]');
  }

  get syntaxBox() {
    return $('//div[@class="left"]/a');
  }

  get codeBox() {
    return $("textarea");
  }
}

module.exports = NewCreatedPastePage;

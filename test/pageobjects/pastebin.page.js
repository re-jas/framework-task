const Page = require("./page");

class PastebinPage extends Page {
  constructor() {
    super();
  }

  get inputСode() {
    return $("#postform-text");
  }

  get syntaxLight() {
    return $("#select2-postform-format-container");
  }

  get syntaxLightChoose() {
    return $("li=Bash");
  }

  get pasteExpiration() {
    return $("#select2-postform-expiration-container");
  }

  get pasteExpirationTime() {
    return $("li=10 Minutes");
  }

  get inputName() {
    return $("#postform-name");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  async newPaste(code, pasteName) {
    await this.inputСode.setValue(code);
    await this.syntaxLight.click();
    await this.syntaxLightChoose.click();
    await this.pasteExpiration.click();
    await this.pasteExpirationTime.click();
    await this.inputName.setValue(pasteName);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("https://pastebin.com");
  }
}

module.exports = PastebinPage;

const EmailEstimate = require("./emailEstimate.page");

class TempMailoPage extends EmailEstimate {
  get switchFullmessageFrame() {
    return $('//*[@id="fullmessage"]');
  }

  get copyAddress() {
    return $(".iconx");
  }

  get emailText() {
    return $("#i-email");
  }

  get refresh() {
    return $(".prim-btn");
  }

  get newMessage() {
    return $(
      "//div[@class='mail-item-sub'][contains(text(),'Google Cloud Price Estimate')]"
    );
  }

  get totalCost() {
    return $('//tr[@id="mobilepadding"]//td/h2');
  }

  openMail() {
    return browser.newWindow("https://tempmailo.com/");
  }

  async receiveMessage() {
    await this.openMail();
    await this.copyAddress.waitForClickable();
    await this.copyAddress.click();

    await browser.switchWindow("google");
    await super.sendMessage();
    await browser.switchWindow("tempmailo");
    await browser.pause(3000);
    await this.refresh.click();
    await this.newMessage.waitForExist({ timeout: 20000 });
    await this.newMessage.click();
    await browser.switchToFrame(await this.switchFullmessageFrame);
    let cost = await this.totalCost.getText();
    return cost.replace("Estimated Monthly Cost: ", "");
  }
}

module.exports = TempMailoPage;

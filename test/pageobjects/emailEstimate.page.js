const CalculatorPage = require("./calculator.page");

class EmailEstimatePage extends CalculatorPage {
  get emailEstimateButton() {
    return $('//button[@id="email_quote"]');
  }

  get emailAddress() {
    return $('//input[@type="email"]');
  }

  get emailSendButton() {
    return $(
      '//md-dialog-actions//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"]'
    );
  }

  async sendMessage() {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await this.emailEstimateButton.click();
    await this.emailAddress.click();
    await this.emailAddress.setValue(["Shift", "Insert"]);
    await this.emailSendButton.waitForClickable();
    await this.emailSendButton.click();
  }

  async getFinalCost() {
    await browser.switchWindow("google");
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    return super.costReuslt;
  }
}

module.exports = EmailEstimatePage;

const Page = require("./page");

class CalculatorPage extends Page {
  // Instances
  get instances() {
    return $("#input_81");
  }
  // Operating System
  get os() {
    return $("#select_94");
  }

  get osOption() {
    return $("#select_option_83");
  }
  // Machine Class
  get machineClass() {
    return $("#select_98");
  }

  get machineClassOption() {
    return $("#select_option_96");
  }
  // Series
  get series() {
    return $("#select_106");
  }

  get seriesOption() {
    return $("#select_option_221");
  }
  // Machine Type
  get machine() {
    return $("#select_108");
  }

  get machineOption() {
    return $("#select_option_427");
  }
  // Add GPUs
  get addGpus() {
    return $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]');
  }
  // GPY type
  get gpuSelect() {
    return $("#select_460");
  }

  get gpuOption() {
    return $("#select_option_467");
  }
  // Number of GPUs
  get numOfGpu() {
    return $("#select_462");
  }

  get numOfGpuOption() {
    return $("#select_option_471");
  }
  // Local SSD
  get localSsd() {
    return $("#select_422");
  }

  get localSsdOption() {
    return $("#select_option_448");
  }
  // Datacenter location
  get dataCenter() {
    return $("#select_114");
  }

  get dataCenterOption() {
    return $("#select_option_233");
  }
  // Committed usage
  get commitedUage() {
    return $("#select_121");
  }

  get commitedUageOption() {
    return $("#select_option_119");
  }
  // Button
  get addToEstimate() {
    return $(
      '//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]'
    );
  }

  /////////////////////////////////////////
  ////////// RESULTS OF ESTIMATE //////////
  /////////////////////////////////////////
  get resultBlock() {
    return $("#resultBlock");
  }

  get regionResult() {
    return $(
      '//md-list-item[@class="md-1-line md-no-proxy"]//div[contains(text(),"Region")]'
    );
  }

  get commitTermResult() {
    return $(
      '//md-list-item[@ng-if="item.items.termText && item.items.termText.length != 0"]'
    );
  }

  get vmClassResult() {
    return $(
      '//md-list-item[@ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]'
    );
  }

  get instanceTypeResult() {
    return $(
      "//div[@ng-class=\"item.items.sustainedUse || item.items.isInstanceCommitted ? 'cpc-cart-multiline' : ''\"]"
    );
  }

  get localSsdResult() {
    return $('//md-list-item[@ng-if="item.items.ssd && item.items.ssd != 0"]');
  }

  get costReuslt() {
    return $('//h2[@class="md-title"]//b[@class="ng-binding"]');
  }
  /////////////////////////////////////////
  ////////// RESULTS OF ESTIMATE //////////
  /////////////////////////////////////////

  async fillTheForm(instanceValue) {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await this.instances.setValue(instanceValue);

    await this.os.click();
    await this.osOption.waitForDisplayed();
    await this.osOption.click();

    await this.machineClass.click();
    await this.machineClassOption.waitForDisplayed();
    await this.machineClassOption.click();

    await this.series.click();
    await this.seriesOption.waitForDisplayed();
    await this.seriesOption.click();

    await this.machine.click();
    await this.machineOption.waitForDisplayed();
    await this.machineOption.click();

    await this.addGpus.click();

    await this.gpuSelect.click();
    await this.gpuOption.waitForDisplayed();
    await this.gpuOption.click();

    await this.numOfGpu.click();
    await this.numOfGpuOption.waitForDisplayed();
    await this.numOfGpuOption.click();

    await this.localSsd.click();
    await this.localSsdOption.waitForDisplayed();
    await this.localSsdOption.click();

    await this.dataCenter.click();
    await this.dataCenterOption.waitForDisplayed();
    await this.dataCenterOption.click();

    await this.commitedUage.click();
    await this.commitedUageOption.waitForDisplayed();
    await this.commitedUageOption.click();

    await this.addToEstimate.click();
  }

  async quickFillTheForm(instanceValue) {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await this.instances.setValue(instanceValue);

    await this.series.click();
    await this.seriesOption.waitForDisplayed();
    await this.seriesOption.click();

    await this.machine.click();
    await this.machineOption.waitForDisplayed();
    await this.machineOption.click();

    await this.addToEstimate.click();
  }
}

module.exports = CalculatorPage;

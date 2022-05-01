const choices = require("./choices");

const params = require("yargs")
  .scriptName("npm run wdio")
  .option("loadstrategy", {
    alias: ["ls", "loadstrategy"],
    describe: "load strategy choice",
    choices: choices.loadStrategies,
  })
  .option("browser", {
    alias: ["b", "browser"],
    describe: "browser choice",
    choices: choices.browsers,
  }).argv;

module.exports = params;


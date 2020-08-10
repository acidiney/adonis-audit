"use strict";

const path = require("path");
async function copyAuditModel (cli) {
  try {
    await cli.copy(
      path.join(__dirname, "templates", "Audit.js"),
      path.join(cli.appDir, "Models/Audit.js"),
    );
    cli.command.completed("create", "Models/Audit.js");
  } catch (error) {
    console.log(error);
  }
}

module.exports = async (cli) => {
  await copyAuditModel(cli);
};

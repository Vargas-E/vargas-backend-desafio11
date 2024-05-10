const dotenv = require("dotenv");
const program = require("../utils/commander.js");

const {mode} = program.opts();

dotenv.config({
    path: mode === "produccion" ? "./.env.produccion" : "./.env.desarrollo"
});

console.log("env:", process.env.ENV);

const configObject = {mongo_url: process.env.MONGO_URL};

module.exports = configObject;
#!/usr/bin/env node

const { scan } = require("./lib");

const argv = process.argv.slice(2);
scan(...argv);

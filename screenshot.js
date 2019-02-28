const puppeteer = require("puppeteer");
// const devices = require('puppeteer/DeviceDescriptors');

main();

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.emulate(devices['iPhone 6']);
  await page.goto("https://monitor.firefox.com/");
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
}

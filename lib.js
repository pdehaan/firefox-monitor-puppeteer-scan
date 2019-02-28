const puppeteer = require("puppeteer");

async function scan(email = "test@test.com") {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://monitor.firefox.com");

  try {
    await page.click("input#scan-email", { delay: 200 });
    await page.keyboard.type(`${email}\n`);
    await page.waitForNavigation();

    const scanResultsMessage = await page.$eval(
      "section.scan-results-message p",
      el => el.textContent.trim()
    );
    // "Accounts associated with your email address appeared in the following 9 breaches."
    let [, breaches] = scanResultsMessage.match(/\s+(\d+) breaches\.$/i);
    breaches = parseInt(breaches, 10);
    console.log(`Found ${breaches} breaches for ${email}`);
    await page.screenshot({ path: `scan-${email}.png`, fullPage: true });
  } catch (err) {
    console.error(err);
  }

  await browser.close();
}

module.exports = {
  scan
};

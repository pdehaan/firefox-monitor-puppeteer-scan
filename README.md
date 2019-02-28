# firefox-monitor-puppeteer-scan

Scan [Firefox Monitor](https://monitor.firefox.com) for the number of breaches an email address was involved in using [Puppeteer](https://pptr.dev/).

## USAGE

### CLI

Want to use <kbd>npx</kbd> to download 90MB of transient dependencies for a single line of console output? READ ON!

```sh
$ npx pdehaan/firefox-monitor-puppeteer-scan test@test.com
# Downloading Chromium r624492 - 84.5 Mb [====================] 100% 0.0s

Found 175 breaches for test@test.com
```

### API

```js
const { scan } = require("./lib");

main("test@test.com");

async function main(email) {
  await scan(email);
}
```

**NOTE:** This nearly useless library simply reports the number of breaches that the specified email address was invovlved in (and generates a screenshot). There is no returned values or array of breaches and breach details, etc. If you're looking for something actually useful, consider the HIBP API, https://haveibeenpwned.com/API/v2

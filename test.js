const { scan } = require("./lib");

main("test@test.com");

async function main(email) {
  await scan(email);
}

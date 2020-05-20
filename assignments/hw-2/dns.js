const dns = require("dns");

dns.resolve4("miu.edu", (err, addresses) => {
  if (err) throw err;
  console.log(`addresses: ${addresses}`);
});

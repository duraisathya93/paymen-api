
const http = require("node:http");
const { getCustomerById } = require("./customerService");


const server = http.createServer((req, res) => {
  if (req.url === "/customers/101/email" && req.method === "GET") {
    try {
      const customer = getCustomerById(101);

      // BUG: The service returns emailAddress, not email.
      const email = customer.email.toLowerCase();

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ email }));
    } catch (error) {
      console.error("API_ERROR:", error.message);

      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Payment API running on port 3000");
});

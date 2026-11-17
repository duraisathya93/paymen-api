
Payment API Demo

Overview

This is a sample Node.js application that exposes an API to retrieve a customer’s email address.

The application contains an intentional bug that causes an HTTP 500 Internal Server Error when the API is called.

Project Structure

payment-api-demo/
├── server.js
├── customerService.js
├── application.log
└── README.md

Prerequisites

* Node.js installed on your machine
* Terminal or command prompt

No external npm packages are required.

How to Run

1. Open a terminal in the project directory.
2. Start the application:

node server.js

3. Open another terminal and call the API:

curl -i http://localhost:3000/customers/101/email

API Details

Endpoint: GET /customers/101/email

Expected behavior: Returns the customer’s email address with HTTP 200.

Actual behavior: Returns HTTP 500 Internal Server Error because of an intentional bug.

Known Issue

The service returns the customer’s email using the property emailAddress, while the API handler attempts to access customer.email.

This property mismatch causes a TypeError when the application calls .toLowerCase().

The resulting error is logged in application.log.

Expected Outcome

The API should successfully retrieve the customer’s email address and return it in a JSON response.

Note: This is a demonstration project with simulated customer data and an intentionally introduced bug. It is not intended for production use.

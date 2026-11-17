
function getCustomerById(id) {
  // Simulated database response
  return {
    id: id,
    name: "Ravi",
    emailAddress: "ravi@example.com"
  };
}

module.exports = { getCustomerById };

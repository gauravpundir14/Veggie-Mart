const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const country = document.getElementById("country").value;
  const fullName = document.getElementById("fullName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const pinCode = document.getElementById("pinCode").value;
  const houseNo = document.getElementById("houseNo").value;
  const area = document.getElementById("area").value;
  const landmark = document.getElementById("landmark").value;
  const town = document.getElementById("town").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // You can implement further actions here like payment processing or confirmation messages
  console.log("Country:", country);
  console.log("Full Name:", fullName);
  console.log("Mobile Number:", mobileNumber);
  console.log("Pin Code:", pinCode);
  console.log("House No:", houseNo);
  console.log("Area/Street:", area);
  console.log("Landmark:", landmark);
  console.log("Town:", town);
  console.log("City:", city);
  console.log("State:", state);
 
});

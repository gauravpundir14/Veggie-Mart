document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodRadios = document.querySelectorAll('[name="paymentMethod"]');
    const cardDetails = document.getElementById("cardDetails");
    const upiDetails = document.getElementById("upiDetails");
    const confirmPaymentButton = document.getElementById("confirmPayment");
  
    paymentMethodRadios.forEach(radio => {
      radio.addEventListener("change", function () {
        const selectedMethod = this.value;
        if (selectedMethod === "card") {
          cardDetails.style.display = "block";
          upiDetails.style.display = "none";
        } else if (selectedMethod === "paytm" || selectedMethod === "gpay") {
          cardDetails.style.display = "none";
          upiDetails.style.display = "block";
        } else {
          cardDetails.style.display = "none";
          upiDetails.style.display = "none";
        }
      });
    });
  
    confirmPaymentButton.addEventListener("click", function () {
      // Simulate payment confirmation process
      setTimeout(function () {
        alert("Payment confirmed! Thank you for your order.");
      }, 1500);
    });
  });
  
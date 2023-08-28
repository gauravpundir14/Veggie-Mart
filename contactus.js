function sendMail() {
    var params = {
      namee: document.getElementById("namee").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  if(namee==""|| email=="" || message=="")  alert("All FIELDS ARE MANDATORY")
  else{
    const serviceID = "service_2v7uwue";
    const templateID = "template_mmbrn63";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("namee").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }
  }
console.log("form");
const form = document.querySelector("form");
form.addEventListener('submit', validateForm);

function validateForm () {
    const password = document.getElementById("password").value
    const confirmpassword = document.getElementById("confirmpassword").value

     if (password !== confirmpassword) {
         alert("Passwords do not match.");   
     }

     else {
      alert ("You are registered");
     }
    }


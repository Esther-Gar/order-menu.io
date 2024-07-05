let form = document.querySelector("#orderForm");

function handleFormSubmission(e) {
    e.preventDefault();

    let fullName = document.querySelector("#fullName").value;
    let address = document.querySelector("#address").value;
    let phoneNumber = document.querySelector("#phoneNumber").value;
    let orderDetails = document.querySelector("#orderDetails").value;
    let apiDiv = document.querySelector(".apiDiv");

    let formDataObj = {
        fullName,
        address,
        phoneNumber,
        orderDetails
    };

    let formDataString = JSON.stringify(formDataObj);

    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formDataString,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then(function (something) {
        return something.json();
      })
    .then(function (response) {
        console.log(response);
  
        
        apiDiv.innerHTML = `<div>
        <ul>
         <li>Full name: ${response.fullName}</li>
         <li>address: ${response.address}</li>
         <li>Phone Number: ${response.phoneNumber}</li>
         <li>Details: ${response.orderDetails}</li>
         
        </ul>
        </div>`;
  
        alert("Thank you for your order! Please expect a call soon!!");

    })




}
if (form != null){
form.addEventListener("submit", handleFormSubmission);
    
} else{
    console.log("Form is null");
}
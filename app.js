"use strict";

let userEmail = "";
let userPassword = "";

let xEmail = "";
let xPassword = "";

fetch("data.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
   // console.log(data);   
    let email = data.email;
   let  password = data.password;

    xEmail = btoa(email);
    xPassword = btoa(password);


    console.log(xEmail);
    console.log(xPassword);
});


function myFunction() {
    let userEmail = document.getElementById("email").value;
    console.log(userEmail);

    let userPassword = document.getElementById("Password");
    console.log(userPassword);


    
  }
"use strict";

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
});


function myFunction() {
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("Password").value;
    let newEmail = atob(xEmail);
    let newPassword = atob(xPassword);

    if(userEmail == newEmail && userPassword == newPassword)
    {
        window.sessionStorage.setItem('userEmail', userEmail);
        replace();
    }
    else{
        alert("Wrong email or password.");
    }
    xEmail = btoa(email);
    xPassword = btoa(password);

  }


  function replace() {
    window.open("data.html");
  }

  function checkFunction()
  {
    let keyValue = sessionStorage.getItem("userEmail");
    if(keyValue == "" || keyValue == null){
        window.close();
    }

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Afghanistan start of Covid-19 grapth"
	},
	axisY: {
		title: "Change over time",
	
	},
	axisX: {
		title: "Criteria"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#\"%\"",
		dataPoints: [
			{ label: "handwashing_facilities", y:37.746 },	
			{ label: "Population Density", y: 54.422 },	
      { label: "life expectensy", y: 64.83},
			{ label: "new Cases", y: 39.857},			
		]
	}]
});
chart.render();

}


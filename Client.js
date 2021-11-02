const { response } = require("express");

function Auth(){
        var email1=document.getElementById('email').value;
        var password1=document.getElementById('password').value;
    
        var requestOptions = {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                email: email1,
                password: password1
            })
        };
        
        fetch('http://localhost:3000/Authentication', requestOptions)
            .then(response => response.text())
            .then(response =>{
                    if(response == "True"){ alert("Authentication Complete, You can Enter...")}
                    else if(response == "False"){ alert("Authentication Complete, You can't Enter Sorry...")}
                console.log(authentication)
            })

            .catch(error => console.log('error',error));
        
    
    }

function addUser(){
    var email1=document.getElementById('email').value;
    var password1=document.getElementById('password').value;

    var requestOptions = {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email: email1,
            password: password1
        })
    };
    
    fetch('http://localhost:3000/addUsers', requestOptions)
        .then(response => response.text())
        .then(json => console.log(result))
        .catch(error => console.log('error',error));
    

}

function GetUsers(){
    var email1=document.getElementById('email').value;
    var password1=document.getElementById('password').value;

    var requestOptions = {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email: email1,
            password: password1
        })
    };
    
    fetch('http://localhost:3000/Users', requestOptions)
        .then(response => response.text())
        .then(response => console.log(result))
        .catch(error => console.log('error',error));
    

}


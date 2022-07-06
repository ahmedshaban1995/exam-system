var fName=document.getElementsByClassName("f-name")[0]
var lName=document.getElementsByClassName("l-name")[0]
var email=document.getElementsByClassName("email")[0]
var passward=document.getElementsByClassName("pass")[0]
var  re_passward=document.getElementsByClassName("re-pass")[0]
var  registration=document.getElementsByClassName("btn")[0]


 function checkpass(e){
    e.preventDefault(); 
    if (passward.value!==re_passward.value) { 
         alert("enter re-passward the same of passward")
    } 
    else{
localStorage.setItem("email",email.value);
localStorage.setItem("passward",passward.value);
        location.replace("login .html")
    }  
 
}






var loginEmail=document.getElementsByClassName("loginEmail")[0];
var loginpassward=document.getElementsByClassName("loginpassward")[0];

var storageemail=localStorage.getItem("email");
var storagepassward=localStorage.getItem("passward");

// console.log(storageemail);

function login(e){
    e.preventDefault(); 
    if (loginEmail.value!==storageemail||loginpassward.value!==storagepassward) { 
         alert("email or passward wrong")
    } 
    else{

        location.replace("questions .html")
    }  
 
}
let loginCredentials = localStorage.getItem("loginStatus");
if(loginCredentials == "false" || loginCredentials == null){

}else{
    location.assign("./orders.html");
}

var userName = document.getElementsByClassName(".loginusername");
var userPassword = document.getElementsByClassName(".loginpassword");
let submitBtn = document.getElementById("submit");
let form = $("#login-form");
form.submit(function(e){
    e.preventDefault();

    const name = userName.value;
    const password = userPassword.value;
    var mObj = {
      username: name,
      password: password,
    };
    if (name === password && name !== "" && password !== "") {
        alert("Login‌  Successful");
        localStorage.setItem("loginStatus", JSON.stringify(mObj));
        location.assign("./orders.html");
    }
    else {
        alert("Please‌‌ enter‌ ‌valid‌ ‌credentials!");
    }
})

document.getElementById("sign-out").style.display = "none";
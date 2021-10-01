function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;

    if (username == "admin" && password == "test") {
        alert("Login Successful!");
        return "login.html";  
    } else {
        alert("Username not found!");
        return "login.html";
        
    }
}
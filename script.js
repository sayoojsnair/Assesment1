let username = document.getElementById("name");
let password = document.getElementById("pwd");
function validate(){
    if (username.value ==""){
        alert("username cannot be blank");
        return false;



    }

else if (password.value ==""){
    alert("password cannot be blank");
    return false;

}


else if(password.value.length<8){
    alert("Minimum password length is 8 charecters")
    return false;

}
}



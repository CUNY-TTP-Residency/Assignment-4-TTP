function checkPassword(){
    let val = document.getElementById("pwd").value
    if(val === "12345678")
        document.getElementById("header").innerHTML = "Password Correct";
    else    
        alert("Incorrect")
}
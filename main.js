function button1() {
    alert("I'm right");
}

function button2() {
    alert("No, I'm right!");
}

function hover() {
    alert("Hey I told you not to hover over me!");
}

function checkPassword(){
    let val = document.getElementById("pwd").value
    if(val === "12345678")
        document.getElementById("header").innerHTML = "Password Correct";
    else    
        alert("Incorrect")
}

function calcSphereVolume(){
    let radius = document.getElementById("userInput").value;
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById("answerBox").innerHTML = volume;
}
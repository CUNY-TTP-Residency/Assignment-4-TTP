function calcSphereVolume(){
    let radius = document.getElementById("userInput").value;
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById("answerBox").innerHTML = volume;
}
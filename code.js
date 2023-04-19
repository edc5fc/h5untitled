let testVariable = 3;
document.getElementById("test").innerHTML = testVariable;

const button = document.getElementById("clicky");
button.addEventListener('click', GetMoney)
function GetMoney(){
    testVariable++;
    console.log("YAS")
    document.getElementById("test").innerHTML = testVariable;
}

function displayText(text, delay = 0){
    let visibleText = ""
    const visibleTextArray = []
    for(let i = 0; i < text.length; i++){
        visibleText = visibleText.concat(text[i])
        visibleTextArray.push(visibleText)
        setTimeout(() => {
            document.getElementById("progress-text").innerHTML = visibleTextArray[i]}, delay + i * 100)
         
    }
    
        
}
   

const textArray = ["one day, joe mama said, <br><br> that poo is holy. <br><br> Joe the Epik, knowing of this from the divine yumminess of the zapperwok, wanted to destroy it. <br><br> So begins the Epic Saga Of Joe.", "Setting out to find the holiest poo, Hammurabi killed a duck to reaveal the poo that would destroy the world. <br> <br>Then, Joe the green ate a moss and died.", "<br><br>Next, Sadfire grilled the toast of holiness, and ate it."]

let delay = 0;
let offset = 7000;

displayText(textArray[0]);

delay = textArray[1].length * 100 + offset;

displayText(textArray[1], delay)


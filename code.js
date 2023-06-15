function displayText(text){
    let visibleText = ""
    const visibleTextArray = []
    for(let i = 0; i < text.length; i++){
        visibleText = visibleText.concat(text[i])
        visibleTextArray.push(visibleText)
        setTimeout(() => {
            document.getElementById("progress-text").innerHTML = visibleTextArray[i]}, i * 50)
         
    }
    
        
}
   

const textArray = ["one day, joe mama said, <br><br> that poo is holy. <br><br>", "Then, Joe the green ate a moss and died.", "<br><br>Next, Sadfire grilled the toast of holiness, and ate it."]

displayText(textArray[0] + textArray[1] + textArray[2])

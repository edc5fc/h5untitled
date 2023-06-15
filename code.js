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
   


displayText("line 1 <br><br> line 2")

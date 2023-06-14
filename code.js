function displayText(text){
    let visibleText = ""
    for(let i = 0; i < text.length; i++){
        visibleText = visibleText + text[i]
        const NextLetter = setTimeout(NextLetter, 50)
        function NextLetter(){
            document.getElementById("progress-text").innerHTML = visibleText;}
         
    }
    
        
}
   


displayText("line 1 <br><br> line 2")

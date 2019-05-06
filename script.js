
$(document).ready(function(){
   
    //Trigger event handler
    $("#optelBtn").click(function(){
        var x = parseInt(document.getElementById("eerstewaarde").value);
        var y = parseInt(document.getElementById("tweedewaarde").value);
        var result = x + y;
        document.getElementById("result").innerHTML = "Het resultaat van de optelsom is: " + result;
        reset(); 
    });

    $("#aftrekBtn").click(function(){
        var x = parseInt(document.getElementById("eerstewaarde").value);
        var y = parseInt(document.getElementById("tweedewaarde").value);
        var result = x - y;
        document.getElementById("result").innerHTML = "Het resultaat van de aftreksom is: " + result; 
        reset();
    });
});
    
function reset() {
    document.getElementById("eerstewaarde").value = ""; 
    document.getElementById("tweedewaarde").value = ""; 
}
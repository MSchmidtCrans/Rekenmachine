
$(document).ready(function(){
   
    //Trigger event handler
    $("#optelBtn").click(function(){
        var x = parseFloat(document.getElementById("eerstewaarde").value);
        var y = parseFloat(document.getElementById("tweedewaarde").value);
        var result = x + y;
        document.getElementById("result").innerHTML = "Het resultaat van de som is: " + result;
        reset();
        document.getElementById("eerstewaarde").value = result; 
    });

    $("#aftrekBtn").click(function(){
        var x = parseFloat(document.getElementById("eerstewaarde").value);
        var y = parseFloat(document.getElementById("tweedewaarde").value);
        var result = x - y;
        document.getElementById("result").innerHTML = "Het resultaat van de som is: " + result; 
        reset();
        document.getElementById("eerstewaarde").value = result; 
    });

    $("#deelBtn").click(function(){
        var x = parseFloat(document.getElementById("eerstewaarde").value);
        var y = parseFloat(document.getElementById("tweedewaarde").value);
        var result = x / y;
        document.getElementById("result").innerHTML = "Het resultaat van de som is: " + result; 
        reset();
        document.getElementById("eerstewaarde").value = result; 
    });

    $("#resetBtn").click(function() {
       reset();
    });

    function reset() {
        document.getElementById("eerstewaarde").value = ""; 
        document.getElementById("tweedewaarde").value = "";   
    }

});
    

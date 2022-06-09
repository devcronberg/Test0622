document.getElementById("minKnap").onclick = function(){
    
    let tal = parseFloat(document.getElementById("tal").value);
    console.log(tal)
    let res = tal * (1.25);
    document.getElementById("res").value = res;

};
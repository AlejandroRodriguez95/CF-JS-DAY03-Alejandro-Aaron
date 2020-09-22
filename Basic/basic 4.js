value = prompt("Please enter the degrees: ");
var value = degreeToRadian(value);

function degreeToRadian(degrees){
    var val = degrees*(Math.PI/180);
    val = val.toFixed(5);
    return val;
}

alert(value);
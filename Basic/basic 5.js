var results = calcAreaVol(7,2,5);

function calcAreaVol(width, height, depth){
    var area, volume;
    var results = [area, volume];
    results[0] = width * height;
    results[1] = width * height * depth;
    return results;
}

console.log("The area of the box is: " + results[0] + "\nThe volume of the box is: " + results[1]);
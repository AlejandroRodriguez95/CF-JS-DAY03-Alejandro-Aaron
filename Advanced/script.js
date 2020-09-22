//prompting user to define their name and print it on to the screen
var player1 = prompt("Player 1 name");
document.getElementById("player1").innerHTML = player1;
console.log(player1);

var player2 = prompt("Player 2 name");
document.getElementById("player2").innerHTML = player2;
console.log(player2);


//enables the html to generate and display a number when clicked apon
var arr = ["a", "b"];
function rolldiece1() {
    var die1 = (Math.floor(Math.random() * 6 + 1));   //we need to generate a random number between 0 to 5 and round it down and then add 1, to prevent a 0
    document.getElementById("die1").innerHTML = die1;
    arr[0] = die1;
    displayWinner();

} //console.log(arr);

function rolldiece2() {
    var die2 = (Math.floor(Math.random() * 6 + 1));
    document.getElementById("die2").innerHTML = die2;
    // console.log(die2);
    arr[1] = die2;
    displayWinner();
}

//calculating the winner of current round
function displayWinner() {
    if (isNaN(arr[0]) == false && isNaN(arr[1]) == false) {
        if (arr[0] == arr[1]) {
       document.getElementById("winner").innerHTML = "It is a TIE!";
        } else if (arr[0] > arr[1]) {
        document.getElementById("winner").innerHTML = "Player 1 has won";
        } else {
        document.getElementById("winner").innerHTML = "Player 2 has won";
        }
    }
}


//var winnerNumber = Math.max(array[0], array[1]);


//function to change the background color every time it refreshes
function randomBg() {   //defines a random color from 1 to 255
    var a = Math.random() * 255;
    var b = Math.random() * 255;
    var c = Math.random() * 255;

    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
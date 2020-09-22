function avgGrade(a,b,c){
    var sum = a+b+c;
    var avg = sum/avgGrade.length;
    console.log(avg, sum); 
}

var a,b,c;

a = prompt("Enter a number");
b = prompt("Enter a number");
c = prompt("Enter a number");

avgGrade(a,b,c);
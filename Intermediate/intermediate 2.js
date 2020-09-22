function avgGrade(a,b,c){
    var sum = a+b+c;
    var avg = sum/avgGrade.length;
    document.write("Sum: " + sum + "<br>Average: " + avg); 
}

var a,b,c;

a = Number(prompt("Enter your maths grade"));
b = Number(prompt("Enter a physics grade"));
c = Number(prompt("Enter a english grade"));

avgGrade(a,b,c);
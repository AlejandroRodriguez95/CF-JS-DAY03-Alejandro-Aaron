//excercise 3
var year = new Date().getFullYear(); //difine var year as the date. getFullYear turns the date into 2020
//console.log(year); //should return 2020/current year
function ageCalculator(a){    //create a dynamic function that calculates age based on birth year and knows the current year
    var age = year-a;              //determin the age of the given individual
    
    document.write("You will be " + age + " years old this year! <br>");   
    //return result in a string
}

ageCalculator(1991);   //input values
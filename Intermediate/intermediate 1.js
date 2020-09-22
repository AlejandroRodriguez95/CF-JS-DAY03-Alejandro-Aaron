
var string = "i am a web developer";
document.write("Original string: " + string + "<br>");
string = capitalizeFirst(string);
document.write("Capitalized string: " + string);

function capitalizeFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
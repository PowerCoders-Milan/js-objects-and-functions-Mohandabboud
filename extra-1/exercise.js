
function date(birthd , a , DateNow, yearsLeft , yearsLeftt, retireDate) {
var x = prompt("Wirte the number of the day you were born on");
var y = prompt("Wirte the number of the month you were born in");
var z = prompt("Wirte the year you were born at");
var birthd = new Date(y +"-"+x +"-"+z);
var a = prompt("Wirte the age you wish to retire at");
var age = Date.now() - birthd;
var DateNow = age / (1000*60*60*24*365); 
window.alert(Math.floor(DateNow));
var yearsLeft = a - DateNow;
var yearsLeftt = yearsLeft * (1000*60*60*24*365); 
var retireDate = Date.now() + yearsLeftt;
window.alert("you have "+ yearsLeft +" until retire it is 2021 now so you will retire at "+ retireDate.toString() +".")
}

date();
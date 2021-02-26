// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function date(newd, recd) {
var x = prompt("Wirte the number of the day you were born on");
var y = prompt("Wirte the number of the month you were born in");
var z = prompt("Wirte the year you were born at");
var newd = new Date(y +"-"+x +"-"+z);
var a = prompt("Wirte the number of the day we are on now");
var b = prompt("Wirte the number of the month we are in now");
var c = prompt("Wirte the year we are at now");
var recd = new Date(b +"-"+a +"-"+c);
var dif = recd- newd;
var diff = dif / (1000*60*60*24*365);
console.log(newd);
console.log(recd);
console.log(dif);
console.log(diff);
}
date();
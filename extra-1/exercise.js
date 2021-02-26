
function date(birthd , a ) {
var x = prompt("Wirte the number of the day you were born on");
var y = prompt("Wirte the number of the month you were born in");
var z = prompt("Wirte the year you were born at");
var birthd = new Date(y +"-"+x +"-"+z);
var a = prompt("Wirte the age you wish to retire at");
var age = Date.now() - birthd;
var DateNow = age / (1000*60*60*24*365); 
var da = Math.round(DateNow);
var yearsLeft = a - da;
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var yearl = Math.round(yearsLeft);
var c = new Date(year + yearl, month);
window.alert("you have "+ yearsLeft +" years until retire, it is "+ year +" now so you will retire at "+ c.toDateString() +".")
}

date();
// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function date(x, y, z, a, b, c) {
var x = prompt("Wirte the number of the day you were born on");
var y = prompt("Wirte the number of the month you were born in");
var z = prompt("Wirte the year you were born at");
var a = prompt("Wirte the number of the day we are on now");
var b = prompt("Wirte the number of the month we are in now");
var c = prompt("Wirte the year we are at now");
var x = Number(x);
var y = Number(y);
var z = Number(z);
var a = Number(a);
var b = Number(b);
var c = Number(c);

if ( y > b) {
    var ye = c - z -1;
    if (x > a) {
        var l = 30 - x;
        var d = a + l;
        var n =  12 - y;
        var o = b -1;
        var m = n + o;
    }
    else {
        var d = a - x;
        var n = 12 - y;
        var m = n + b;
    }
}

if ( y <= b) {
    var ye = c - z ;
    if (x > a) {
        var l = 30 - x;
        var d = l + a;
        var m = b - y;
    }
    else {
        var d = a - x;
        var m = b - y;
    }
}

window.alert("I was born the " + z +" month " + y +" day " + x +" and now it is "+ c +" month " + b +" day " + a +" . So I am "+ ye +" years "+ m +" month and "+ d +" days");
}

date()
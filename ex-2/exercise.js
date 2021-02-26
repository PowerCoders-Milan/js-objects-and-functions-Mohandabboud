// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function tellFortune( job ,  geo , partner , children) {
    this.job = job 
    this.geo= geo
    this.partner= partner
    this.children= children
    var job = prompt("write your dream job");
    var geo = prompt("write where you want it to be");
    var partner = prompt("write your future partner name ");
    var children = prompt("write how many children you wish to have"); 
    window.alert("You will be a " + job +" in " + geo +", and married to " + partner + " with " + children +" kids."); 
}

tellFortune();
tellFortune();
tellFortune();





function info (name , birthday, occupation, city) {
    var name = prompt("Wirte your name please");
    var birthday = prompt("Wirte your birthday");
    var occupation = prompt("Wirte your current occupation");
    var city = prompt("Wirte your city");
    this.name = name;
    this.birthday = birthday;
    this.occupation = occupation;
    this.city = city;

    var question = prompt("what do you want to do");

    if (question == "remember") {
        var r = prompt("What do you want to remember?");
        if (r == "name") {
            window.alert("your name is "+ name +".")
        }
        else if (r == "birthday") {
            window.alert("your birthday is "+ birthday +".")
        }
        else if (r == "occupation") {
            window.alert("your job is a "+ occupation +".")
        }
        else if (r == "city") {
            window.alert("your city is "+ city +".")
        }
        else {
            window.alert("I do not understand, please be more specific.")
        }
        window.alert("your name is "+ name +", your birthday is "+ birthday +", your job is a "+ occupation +", your city is "+ city +".");
    }

    else if (question == "change") {
        var a = prompt("What do you want to change?");
        if (a == "name") {
            var name = prompt("Wirte your name please");
        }
        else if (a == "birthday") {
            var birthday = prompt("Wirte your birthday");
        }
        else if (a == "occupation") {
            var occupation = prompt("Wirte your current occupation");
        }
        else if (a == "city") {
            var city = prompt("Wirte your city");
        }
        else {
            window.alert("I do not understand, please be more specific.")
        }
        window.alert("your name is "+ name +", your birthday is "+ birthday +", your job is a "+ occupation +", your city is "+ city +".");
    }

    else if (question == "delete") {
        var d = prompt("What do you want to delete?");
        if (d == "name") {
            name = undefined;
            delete info["name"];   
        }
        else if (d == "birthday") {
            birthday = undefined;
            delete info["birthday"];
        }
        else if (d == "occupation") {
            occupation = undefined;
            delete info["occupation"];
        }
        else if (d == "city") {
            city = undefined;
            delete info["city"];
        }
        else {
            window.alert("I do not understand, please be more specific.")
        }
        window.alert("your name is "+ name +", your birthday is "+ birthday +", your job is a "+ occupation +", your city is "+ city +".");
    }

    else {
        window.alert(name +", we are not able to do that right now, please try later.");
    }

}

info()
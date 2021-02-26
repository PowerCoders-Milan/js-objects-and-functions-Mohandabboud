function helloworld (language) {
    var language = prompt("Wirte the language");
    if (language == "en") {
    console.log("Hello,world");
    window.alert("Hello,world")
    }
    else if (language == "ar") {
        console.log("مرحبا بالعالم");
        window.alert("مرحبا بالعالم");
        }
    else if (language == "it") {
        console.log("Ciao, mondo");
        window.alert("Ciao, mondo");
        }
    else  {
        console.log("Hello,world");
        window.alert("Hello,world");
    }
}

helloworld();
var today = new Date();

var hourNow = today.getHours();

var Greeting;

if (hourNow > 18) {
    Greeting = "Good Evening";
}

else if (hourNow > 12) {
    Greeting = "Good Afternoon"
}

else if (hourNow > 0) {
    Greeting = "Good Morning";
}

else {
    Greeting = "Welcome";
}

document.write(Greeting) 


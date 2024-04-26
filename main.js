"use strict";
//Tertary Operators
//Example 1
let userName = "Musawer Bangash";
let pw = 123456;
if (userName == "Musawer Bangash" && pw == 123456) {
    console.log("you are succesfully login");
}
else {
    console.log("Please enter a correct username and password");
}
//Example 2    
(userName == "Musawer Bangash" && pw == 123456)
    ? console.log("you are succesfully login")
    : console.log("Please enter a correct username and password");

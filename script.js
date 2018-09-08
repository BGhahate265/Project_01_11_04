/*  Project 01_11_04

    Author: Braddock Ghahate
    Date: 08.06.18

    Filename: script.js
*/

"use strict";

//global variables
var httpRequest = false; // var to hold XMR object

function getRequestObject() {
    try {
        httpRequest = new HttpRequest();
    } catch (requestError) {
        document.getElementById("csset").style.visibility = "visible";
        var zip = document.getElementById("zip").value;
        if (zip.addEventListener) {
            zip.removeEventListener("keyup", checkInput, false);
        } else if (zip.attachEvent) {
            zip.detachEvent("onkeyup", checkInput);
        }
        return false;
    }
    return httpRequest;
}

// function to check the length of the zip code
function checkInput() {
    var zip = document.getElementById("zip").value;
    if (zip.length === 5) {
        getLocation()
    } else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}


function getLocation() {
    var zip = document.getElementById("zip").value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "http://api.zippopotam.us/us/" + zip, true);
    httpRequest.send(null);
}

// Event Hanlders for the keyup
var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
} else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkoutInput);
}

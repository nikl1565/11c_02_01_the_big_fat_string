"use strict";

document.addEventListener("DOMContentLoaded", init);

const generateStringButton = document.querySelector(".js-generate-string-button");
const inputString = document.querySelector(".js-input-string");
const selectStringConversion = document.querySelector(".js-select-string-conversion");
const outputString = document.querySelector(".js-output-string");
let userInput;
let userOption;
let stringResult;

function init() {
    console.log("init");
    generateStringButton.addEventListener("click", getUserInput);
}

function getUserInput() {
    console.log("getUserInput");

    userInput = inputString.value;

    if (userInput) {
        getUserOption();
    } else {
        console.log("You need to write something in the input field.");
    }
}

function getUserOption() {
    console.log("getUserOption");

    userOption = parseInt(selectStringConversion.value);

    convertString();
}

function convertString() {
    console.log("convertString");

    switch (userOption) {
        case 1:
            convertToFirstUppercaseRestLowerCase();
            break;
        case 2:
            convertToFirstName();
            break;
        case 3:
            convertToFirstNameLength();
            break;
        case 4:
            convertToMiddleNamePositionAndNameItself();
            break;
        case 5:
            convertToFiletype();
            break;
        case 6:
            convertToPassword();
            break;
        case 7:
            convertToThirdCharacterUppercase();
            break;
        case 8:
            convertToUppercaseIfFollowedByHyphenOrSpace();
            break;
        default:
            console.log("no option selected");
            break;
    }
}

function convertToFirstUppercaseRestLowerCase() {
    console.log("convertToFirstUppercaseRestLowerCase");

    const firstLetter = userInput[0].toUpperCase();
    const restOfFirstName = userInput.substring(1).toLowerCase();

    stringResult = `${firstLetter}${restOfFirstName}`;

    showOutput();
}

function convertToFirstName() {
    console.log("convertToFirstName");
    const firstNamePosition = userInput.indexOf(" ");

    stringResult = userInput.substring(0, firstNamePosition);

    showOutput();
}

function convertToFirstNameLength() {
    console.log("convertToFirstNameLength");

    const firstNamePosition = userInput.indexOf(" ");

    stringResult = userInput.substring(0, firstNamePosition).length;

    showOutput();
}

function convertToMiddleNamePositionAndNameItself() {
    console.log("convertToMiddleNamePositionAndNameItself");

    const firstPosition = userInput.indexOf(" ") + 1;
    const lastPosition = userInput.lastIndexOf(" ");

    const middleName = userInput.substring(firstPosition, lastPosition);

    stringResult = `Middle name: ${middleName} at position ${firstPosition} and ${lastPosition}`;

    showOutput();
}

function convertToFiletype() {
    console.log("convertToFiletype");

    const fileType = userInput.lastIndexOf(".");
    stringResult = userInput.substring(fileType);

    showOutput();
}

function convertToPassword() {
    console.log("convertToPassword");

    const star = "*";

    stringResult = star.repeat(userInput.length);

    showOutput();
}

function convertToThirdCharacterUppercase() {
    console.log("convertToThirdCharacterUppercase");

    const beforeUppercase = userInput.substring(0, 2).toLowerCase();
    const uppercaseLetter = userInput[2].toUpperCase();
    const afterUppercase = userInput.substring(3).toLowerCase();

    stringResult = `${beforeUppercase}${uppercaseLetter}${afterUppercase}`;

    showOutput();
}

function convertToUppercaseIfFollowedByHyphenOrSpace() {
    console.log("convertToUppercaseIfFollowedByHyphenOrSpace");

    let wasLastLetterAHyphenOrSpace = false;
    let result = "";

    for (let index = 0; index < userInput.length; index++) {
        if (wasLastLetterAHyphenOrSpace === true) {
            result += userInput[index].toUpperCase();
        } else {
            result += userInput[index];
        }

        if (userInput[index] === "-" || userInput[index] === " ") {
            wasLastLetterAHyphenOrSpace = true;
        } else {
            wasLastLetterAHyphenOrSpace = false;
        }
    }

    stringResult = result;

    showOutput();
}

function showOutput() {
    console.log("showOutput");

    outputString.textContent = stringResult;
}

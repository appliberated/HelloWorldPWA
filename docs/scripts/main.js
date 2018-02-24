/* eslint-disable require-jsdoc */
/* eslint-disable max-statements */
/* eslint-disable no-console */

import * as utils from "/scripts/utils.js";

let helloWorldMessages;
const titleElem = document.getElementById("title");
const searchElem = document.getElementById("search");
const mainElem = document.getElementById("main");
const messageElem = document.getElementById("message");

function setHelloWorldMessage(index) {

    // First, generate and apply a random background color, and add text contrast effect, if needed
    const [r, g, b] = utils.getRandomRGB();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    messageElem.classList.toggle("message--contrast", utils.needsContrastColor(r, g, b));

    // Update the Hello World message, language, and search action link
    const [lang, message] = helloWorldMessages[index];
    messageElem.textContent = message;
    titleElem.textContent = `Hello World in ${lang}`;
    searchElem.href = `https://www.google.com/search?q=${message}`;

    // Set the largest possible Hello World message text font size that fits
    utils.fitTextResponsive(messageElem, mainElem);
}

function shuffle() {
    const randomIndex = utils.getRandomInt(helloWorldMessages.length);
    setHelloWorldMessage(randomIndex);
}

function initApp() {
    fetch("/scripts/helloworld.json")
        .then(response => response.json())
        .then(data => {
            helloWorldMessages = data;
            shuffle();
        });

    document.getElementById("shuffle").addEventListener("click", () => {
        shuffle();
    });
}

initApp();

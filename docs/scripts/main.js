/* eslint-disable require-jsdoc */
/* eslint-disable max-statements */

import * as utils from "/scripts/utils.js";

let helloWorldMessages;
const messageElem = document.getElementById("message");
const titleElem = document.getElementById("title");
const searchElem = document.getElementById("search");

function setHelloWorldMessage(message, lang) {
    messageElem.textContent = message;
    document.title = `Hello World in ${lang}`;
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    // var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    context.font = font;
    console.log(font + " " + context.font);
    var metrics = context.measureText(text);
    return metrics.width;
}

function shuffle() {
    // Generate and apply a random background color
    const [r, g, b] = utils.getRandomRGB();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Add text contrast effect, if needed
    messageElem.classList.toggle("contrast", utils.needsContrastColor(r, g, b));

    const randomIndex = utils.getRandomInt(helloWorldMessages.length);
    const [lang, message] = helloWorldMessages[randomIndex];
    messageElem.textContent = message;
    titleElem.textContent = `Hello World in ${lang}`;

    searchElem.href = `https://www.google.com/search?q=${message}`;

    // console.log(message.length);
    // const size = message.length * 7.5 / 24;
    // const size = (24 - message.length) * 0.4 + 7.5;
    // messageElem.style.fontSize = `${size}vw`;
    // console.log(getTextWidth(message, "1rem sans-serif"));
    // let size = 1;
    // let width;
    // do {
    //     size += 1;
    //     width = getTextWidth(message, `${size}vw sans-serif`);
    //     console.log(width);
    //     if (size > 30) break;
    // } while (width < document.body.clientWidth);

    let size;
    for (size = 1; size < 30; size++) {
        const width = getTextWidth(message, `${size}rem sans-serif`);
        console.log(width + " " + document.body.clientWidth);
        if (width >= document.body.clientWidth - 32) break;
    }

    messageElem.style.fontSize = `${size - 1}rem`;
}

// function resizing()  { 
//     messageElem.style.zIndex = utils.getRandomInt(256);
//     // messageElem.offsetHeight;
//     console.log(messageElem.style.zIndex); 
// }
// window.onresize = resizing;

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

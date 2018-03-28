/*
 * Hello World PWA (https://helloworldpwa.applbr.com/)
 * Copyright (c) 2018 Appliberated (https://www.appliberated.com)
 * Licensed under MIT (https://github.com/appliberated/HelloWorldPWA/blob/master/LICENSE)
 */

import * as utils from "/scripts/utils.js";

/**
 * The Hello World messages array, to be loaded from JSON, and empty by default.
 */
let helloWorldMessages = [];

/**
 * The main DOM elements.
 */
const titleEl = document.getElementById("title");
const mainEl = document.getElementById("main");
const messageEl = document.getElementById("message");

/**
 * Sets a new Hello World message.
 * @param {number} index The index in the Hello World messages array.
 * @returns {void}
 */
function setHelloWorldMessage(index) {
    // Update the Hello World message and language
    const [lang, message] = helloWorldMessages[index];
    messageEl.textContent = message;
    titleEl.textContent = `Hello World in ${lang}`;

    // Set the largest possible Hello World message text font size that fits
    utils.fitTextResponsive(messageEl, mainEl);
}

/**
 * Sets a random Hello World message and background color.
 * @returns {void}
 */
function shuffle() {
    // First, generate and apply a random background color, and add text contrast effect, if needed
    const [r, g, b] = utils.getRandomRGB();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    messageEl.classList.toggle("message--contrast", utils.isLightColor(r, g, b));

    // Set a Hello World message in a random language
    if (helloWorldMessages.length > 0) {
        const randomIndex = utils.getRandomInt(helloWorldMessages.length);
        setHelloWorldMessage(randomIndex);
    }
}

/**
 * Sets the default Hello World message and background color.
 * @returns {void}
 */
function reset() {
    setHelloWorldMessage(0);

    // Leave it to the CSS to show the default background color
    document.body.removeAttribute("style");
    messageEl.classList.remove("message--contrast");
}

/**
 * Initializes the app.
 * @returns {void}
 */
function initApp() {
    // Fetch the Hello World messages from JSON
    fetch("/scripts/helloworld.json")
        .then(response => response.json())
        .then(data => {
            helloWorldMessages = data;

            // We have messages, so we can show the toolbar
            const toolbarEl = document.getElementById("toolbar");
            toolbarEl.classList.add("toolbar--visible");

            // First shuffle: always show a message in a random language at startup
            shuffle();
        });

    // Attach the Shuffle action item events: click => shuffle, right-click/long-tap => reset
    const shuffleEl = document.getElementById("shuffle");
    shuffleEl.addEventListener("click", event => { shuffle(); event.preventDefault(); });
    shuffleEl.addEventListener("contextmenu", event => { reset(); event.preventDefault(); });
}

initApp();

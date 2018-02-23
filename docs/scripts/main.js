import * as utils from "/scripts/utils.js";


const messageElem = document.getElementById("message");


/**
 * 
 * @param {*} message 
 * @param {*} lang 
 */
function setHelloWorldMessage(message, lang) {
    messageElem.textContent = message;
    document.title = `Hello World in ${lang}`;

}


// Apply the random colors as soon as possible
const [r, g, b] = utils.getRandomRGB();
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// document.body.style.color = utils.getContrastYIQ(r, g, b);

messageElem.classList.toggle("contrast", utils.needsContrastColor(r, g, b));

fetch("/scripts/helloworld.json")
    .then(response => response.json())
    .then(data => {
        const randomIndex = utils.getRandomInt(data.length);
        setHelloWorldMessage(data[randomIndex][1], data[randomIndex][0]);
    });



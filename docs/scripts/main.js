(function App() {

    "use strict";

    /**
     * Returns a random integer between 0 and the specified value.
     * @param {*} max 
     * @returns
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


    /** 
     * 
     */
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    /**
     * 
     * @param {*} message 
     * @param {*} lang 
     */
    function setHelloWorldMessage(message, lang) {
        const messageElem = document.getElementById("message");
        messageElem.textContent = message;
        document.title = `Hello World in ${lang}`;

    }

    // Apply the random colors as soon as possible
    document.body.style.backgroundColor = getRandomColor();
    document.body.style.color = getRandomColor();

    fetch("/scripts/helloworld.json")
        .then(response => response.json())
        .then(data => {
            const randomIndex = getRandomInt(data.length);
            setHelloWorldMessage(data[randomIndex][1], data[randomIndex][0]);
        });

}());

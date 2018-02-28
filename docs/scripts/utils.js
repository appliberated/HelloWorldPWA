/*
 * Hello World PWA (https://helloworldpwa.applbr.com/)
 * Copyright (c) 2018 Appliberated (https://www.appliberated.com)
 * Licensed under MIT (https://github.com/appliberated/HelloWorldPWA/blob/master/LICENSE)
 */

/* eslint-disable no-magic-numbers */

/**
 * Returns a random integer between 0 and the specified value.
 * @param {number} max The maximum value for the random integer.
 * @returns {number} A positive random integer less than (and not equal) max.
 */
export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/** 
 * Returns a random RGB color.
 * @returns {number[]} A RGB color array.
 */
export function getRandomRGB() {
    return [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
}

/**
 * Gets whether a color is light or dark.
 * @param {number} red The red component of the color.
 * @param {number} green The green component of the color.
 * @param {number} blue The blue component of the color.
 * @returns {boolean} true if the color is a light one, false otherwise.
 */
export function isLightColor(red, green, blue) {
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    // 192 is our opinionated value
    return yiq >= 192;
}

/**
 * Sets the largest possible text font size that fits.
 * @param {HTMLElement} child The child element.
 * @param {HTMLElement} parent The parent element.
 * @returns {void}
 */
export function fitTextResponsive(child, parent) {
    child.style.fontSize = "1vw";
    child.style.fontSize = `${parent.clientWidth / child.clientWidth}vw`;
}
/* eslint-disable require-jsdoc */

/**
 * Returns a random integer between 0 and the specified value.
 * @param {number} max The maximum value for the random integer.
 * @returns {number} A positive random integer less than (and not equal) max.
 */
export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomRGB() {
    return [getRandomInt(256), getRandomInt(256), getRandomInt(256)];
}

export function needsContrastColor(red, green, blue) {
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    // 192 is our opinionated value
    return yiq >= 192;
}

export function fitTextResponsive(child, parent) {
    child.style.fontSize = "1vw";
    child.style.fontSize = `${parent.clientWidth / child.clientWidth}vw`;
}

// export function getContrastYIQ(red, green, blue) {
//     const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
//     return yiq >= 128 ? "black" : "white";
// }

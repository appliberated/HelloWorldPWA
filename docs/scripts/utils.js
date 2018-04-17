/*
 *  Hello World PWA. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/helloworldpwa/
 */

/* eslint-disable no-magic-numbers */

const CONTRAST_LIGHT_ITEM_THRESHOLD = 3;

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
    return {red: getRandomInt(256), green: getRandomInt(256), blue: getRandomInt(256)};
}

/**
 * Calculates the contrast between the given color and white, using the algorithm provided by the WCAG v2 in
 * {@link http://www.w3.org/TR/WCAG20/#contrast-ratiodef}.
 * Based on {@link https://goo.gl/FUWAta Chromium ColorUtils Java class}.
 * @param {Object} color The input color.
 * @returns {number} The contrast value.
 */
function getContrastForColor(color) {
    let bgR = color.red / 255;
    let bgG = color.green / 255;
    let bgB = color.blue / 255;
    bgR = bgR < 0.03928 ? bgR / 12.92 : Math.pow((bgR + 0.055) / 1.055, 2.4);
    bgG = bgG < 0.03928 ? bgG / 12.92 : Math.pow((bgG + 0.055) / 1.055, 2.4);
    bgB = bgB < 0.03928 ? bgB / 12.92 : Math.pow((bgB + 0.055) / 1.055, 2.4);
    const bgL = (0.2126 * bgR) + (0.7152 * bgG) + (0.0722 * bgB);
    return Math.abs(1.05 / (bgL + 0.05));
}

/**
 * Check whether lighter or darker foreground text should be used depending on the given background color.
 * Based on {@link https://goo.gl/4Lfuh2 Chromium ColorUtils Java class}.
 * @param {Object} backgroundColor The background color value which is being queried.
 * @returns {boolean} Whether light colored elements should be used.
 */
export function shouldUseLightForegroundOnBackground(backgroundColor) {
    return getContrastForColor(backgroundColor) >= CONTRAST_LIGHT_ITEM_THRESHOLD;
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

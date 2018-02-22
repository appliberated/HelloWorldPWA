/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "c87753680636def6ded3fe829f41eebb"
  },
  {
    "url": "scripts/helloworld.json",
    "revision": "59c4d0c13f1c00ec136d59587144f133"
  },
  {
    "url": "scripts/main.js",
    "revision": "a4dd0c6568382d2ed5c6bb8a556e000a"
  },
  {
    "url": "styles/main.css",
    "revision": "de198c69cd0ccd25eb4e1b3ffda51d50"
  },
  {
    "url": "styles/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

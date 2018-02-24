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
    "revision": "182dba9958a5a0603fb14817d96247ae"
  },
  {
    "url": "scripts/helloworld.json",
    "revision": "d12cc2c5fb798c039c50bed1d041d186"
  },
  {
    "url": "scripts/main.js",
    "revision": "9c7cd989627d4296c1228b98e22935eb"
  },
  {
    "url": "scripts/utils.js",
    "revision": "9940f4954578e6e158efaac45eca7fe4"
  },
  {
    "url": "styles/main.css",
    "revision": "352028bf16515bcadc2471a92f7af8e5"
  },
  {
    "url": "styles/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  },
  {
    "url": "images/icons/ic_refresh_black_24px.svg",
    "revision": "24cd311a529af88ad5879723732d7f30"
  },
  {
    "url": "images/icons/ic_search_black_24px.svg",
    "revision": "46a97de5d8c0d86fb3362515efd81495"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

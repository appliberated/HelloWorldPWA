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
    "revision": "93d1d4b39635027383e561b7f65ac4bb"
  },
  {
    "url": "scripts/main.js",
    "revision": "d6e6e4165682a57f5ecd39e4a0f2d9b3"
  },
  {
    "url": "scripts/utils.js",
    "revision": "ce2a5f71c49e6ae0225abc5f27551c57"
  },
  {
    "url": "data/helloworld.json",
    "revision": "18e2041efb50449379decffb0eac60ee"
  },
  {
    "url": "styles/main.css",
    "revision": "8e753291030c1dd8766aa070ea19e406"
  },
  {
    "url": "styles/normalize.css",
    "revision": "51e4e5bb1475d193fc34b28e93929bb6"
  },
  {
    "url": "images/icons/ic_info_outline_black_24px.svg",
    "revision": "6c68694245da540d4e0fffd2883e4583"
  },
  {
    "url": "images/icons/ic_refresh_black_24px.svg",
    "revision": "24cd311a529af88ad5879723732d7f30"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

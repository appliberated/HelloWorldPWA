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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "9b9478b11a97cfd5e38009eac11c8290"
  },
  {
    "url": "scripts/helloworld.json",
    "revision": "18e2041efb50449379decffb0eac60ee"
  },
  {
    "url": "scripts/main.js",
    "revision": "92682c687c6201586942c29a6d63f72b"
  },
  {
    "url": "scripts/utils.js",
    "revision": "34d801c827e8d80c7325ebad07e8dc32"
  },
  {
    "url": "styles/main.css",
    "revision": "e766a6ea3651faccb0f5e7ddd37acee0"
  },
  {
    "url": "styles/normalize.css",
    "revision": "51e4e5bb1475d193fc34b28e93929bb6"
  },
  {
    "url": "images/icons/ic_info_outline_black_24px.svg",
    "revision": "3b1d479abe000b3ee42b1e12ff4e6003"
  },
  {
    "url": "images/icons/ic_refresh_black_24px.svg",
    "revision": "24cd311a529af88ad5879723732d7f30"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

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
    "revision": "365c6e5fd2a95edec71205610177012f"
  },
  {
    "url": "scripts/helloworld.json",
    "revision": "59c4d0c13f1c00ec136d59587144f133"
  },
  {
    "url": "scripts/main.js",
    "revision": "669e7da2c54b5270c6c6b06b973b771f"
  },
  {
    "url": "scripts/utils.js",
    "revision": "3507e2e13e3e4f6342e9deb6a4eb29c5"
  },
  {
    "url": "styles/main.css",
    "revision": "071d7839e363cc89a049568a46bcf0c6"
  },
  {
    "url": "styles/normalize.css",
    "revision": "51e4e5bb1475d193fc34b28e93929bb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

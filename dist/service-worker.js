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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "//pingfen-executive.chengjiukehu.com/precache-manifest.0fbdc6ae91841fd42f418a70bfe0d2d0.js"
=======
<<<<<<< HEAD
  "/precache-manifest.dae21892e1e5e30316d7a1a0a984210d.js"
=======
  "//pingfen-executive.chengjiukehu.com/precache-manifest.33df47cc794caf40ae489a8247269540.js"
>>>>>>> 63d5506f14f95859dedbc81caa772c22e91904e5
>>>>>>> 344d1222c4b96b7c80f235594defe675aefba883
);

workbox.core.setCacheNameDetails({prefix: "pingfen-pc"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

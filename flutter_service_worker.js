'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/assets/logo.png": "1842e35a6141bd88810261420b52d2ae",
"/assets/assets/screenshot_4.jpg": "fa029cedc82511f1296a87254a7bfc5b",
"/assets/assets/Google-Pixel-3-1-oemho1lff21uxskyryotrzdgzupzuoyrxhovaza3mo.png": "49aed483e5bc8ea02bf21fdd1cf0d3aa",
"/assets/assets/Screenshot%25202020-02-07%2520at%252012.05.21%2520AM.png": "ba8b55ca51a952d184939782e3f5b15d",
"/assets/assets/Markszen_quiz_maker_result_screen-oemmhwspku28h614im9ihlvwonr6n67di1v60jhiow.png": "fbe50de1cbd591c686ee7dda2725b16c",
"/assets/assets/test.png": "1b7c2584ba476e4e0e000efcf6aca260",
"/assets/assets/testimonial.jpg": "14eed6d88ee7608b91a3de849e551d8d",
"/assets/assets/Markszen_quiz_maker-oemi2wflfse0fx030vvjoqer03huigy1n0w5df93a8.png": "7313fcf69351050c67704da8bd558a39",
"/assets/assets/screenshot_1.jpg": "424c3d2c73b156ac94b223d866822118",
"/assets/assets/app_store_badge.png": "ae7be9530c10b37833b0bcc95061e9b4",
"/assets/assets/header_screenshot.png": "c51868339ed57d345ca60e81bdf7d143",
"/assets/assets/google_play_button.png": "f3cc4c4560beac398eda0ec85949da4b",
"/assets/assets/Markszen_quiz_maker_result_screen.png": "c3700cff3398046ef1c11e976b08c14b",
"/assets/assets/screenshot_3.jpg": "8cde21c65abc2425e25e85163a914fdf",
"/assets/assets/googlepixel1.png": "acaa26037da32bab77c06151ecd4fbfb",
"/assets/assets/coverImage.png": "d2726be69b95fa80e9450be955b15640",
"/assets/assets/screenshot_2.jpg": "7a84c2fe1cbc2965f96e8da2856b7e4f",
"/assets/assets/markszen_quiz_maker_app_usercategoriescreen-oemmszca2l7t7ty7vejbutbck16tau5kcuh1hv2leo.png": "a40c962355bd6c71d650e9eab5638866",
"/assets/AssetManifest.json": "6d894487d28b19af7ed3cf16362d9224",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/LICENSE": "d33ef91063d303a9847c2c8169ebaad8",
"/main.dart.js": "d2658023b493c443ab49d5ec4892b489",
"/index.html": "e416935b94894f87900942982c99e2ac"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

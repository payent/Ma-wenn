const CACHE_NAME = "myway-cache-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./manifest.json",
    "./icon.png"
];


self.addEventListener("install", event => {

    console.log("MyWay installé ❤️");

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
    );

});


self.addEventListener("activate", event => {

    console.log("MyWay actif ❤️");

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })

    );

});
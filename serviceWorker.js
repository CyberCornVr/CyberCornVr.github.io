const staticApp = "AppCache"
const assets = [
  "/",
  "index.html",
  "manifest.json",
  "assets/",
  "assets/icon.png",
  "css/",
  "css/styles.css",
  "js/",
  "js/script.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticApp).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
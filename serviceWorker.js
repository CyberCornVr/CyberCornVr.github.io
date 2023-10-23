const staticApp = "AppCache"
const assets = [
  "/",
  "/app/",
  "/app/app.html",
  "/app/styles.css",
  "/app/script.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAppe).then(cache => {
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
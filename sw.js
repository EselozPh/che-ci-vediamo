const CACHE='che-ci-vediamo-v1';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html','./manifest.webmanifest','./logo.svg','./icon-192.png','./icon-512.png','./icon-512-maskable.png'])));self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(event.request.method!=='GET'||u.origin!==location.origin)return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))))});

/* Migration-only service worker for the legacy DuoQuest path; preserves browser storage. */
const DEST='https://empyrios.github.io/duoquest/';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('duoquest-shell-')).map(k=>caches.delete(k)))),
  self.clients.claim()
])));
self.addEventListener('fetch',event=>{
  if(event.request.mode!=='navigate'||event.request.method!=='GET')return;
  const url=new URL(event.request.url),scope=new URL(self.registration.scope);
  if(url.origin===scope.origin&&url.pathname.startsWith(scope.pathname)){
    event.respondWith(Promise.resolve(Response.redirect(DEST+url.search,302)));
  }
});

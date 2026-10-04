// 예전 '바둑 AI' 서비스 워커를 대신해: 옛 캐시를 지우고 스스로 해제한 뒤 새 주소로 보낸다
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('baduk-ai')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://canopus309.github.io/tabletop/go/');
})()));

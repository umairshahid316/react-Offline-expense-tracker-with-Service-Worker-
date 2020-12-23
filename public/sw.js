console.log("registered")


var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/static/js/bundle.js',
'/static/js/main.chunk.js',
'/static/js/0.chunk.js',
'index.js',
'app.js',     
'/'
];

self.addEventListener('install', function(event) {
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});




self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

////////////////////////////////////


// this.addEventListener('fetch', (event)=> {
//     if(!navigator.onLine){
//     event.respondWith(
//       caches.match(event.request)
//         .then((result) => {
//           // Cache hit - return response
//           if (result) {
//             return result;
//           }
//         //   return fetch(event.request);
//         }
//       )
//     );
//     }
//   });

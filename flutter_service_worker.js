'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01921fd654ab44bd7aca8cdd77e8925e",
".git/config": "51d9be482a3d500f205c4c762eef9dc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c5ecc0b4696c8817a6b829eb9ba9c6b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1d8ffc8700189af9994e2e4f3f1c1724",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d09eff8e092c168cf640c627e98df77",
".git/logs/refs/heads/main": "09d3543f697dbded398c6e7ae703162b",
".git/logs/refs/remotes/origin/main": "d04d2f7c33036a0170afdec6d1065d6e",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/0c/ef59430b9b817233941cff5e6a02443cd34b59": "d6390648e3a5470040745dc017a79e0a",
".git/objects/16/e39414cb2b5e68aaed7b9b4db317b0b9ef7179": "744575984565044b2057ef9d205d352e",
".git/objects/18/a3905f4f1a126532f713f742e36f4ab738728c": "411f9a52bc7e4b5f5213d8d16d6edb50",
".git/objects/31/216fe56004139b20ba6958afba6faa13d2f564": "71aa7fa7f01880d4547fcb17cd20b6e4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/b537b101ba3cedb4c4a193b1da94ae50b12cf4": "61a8cf6e452403dc6ca26199d2258e33",
".git/objects/34/ef06cec168bba5bd975e47f9af52f9cb1bdf7c": "c836e367701f9d9fa0a14c41be591457",
".git/objects/45/d12497440aaceb0bc9a8c2f9b284ea17990f62": "219cc9e8a177f5447d8b1c84e2b43ec7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/55/a141805bf1e2301e6f96f36f124e5f4ce371cf": "c28fac44b0c619f4b7a1776971250b06",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/a1a588ad4faa8936f1d02cde3c77de4810f52f": "8b7ebf3146f4580822ccc088706c380e",
".git/objects/80/7fbf15b35fb38207ea41d9d84bac4a16744a75": "d5d41ffae439639555b9a4b9174001d6",
".git/objects/81/22107a520076facdc1ad8f4e321ae933737d2e": "2e7147be03a2ad548fc373eaddcd79fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8fa8227b731890e2f7766b3c357ac44c592b70": "161e488ea918ce03e2f2af558c091397",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9848f16d5feebef4bac404217495a831b6603d": "2a8ed74512e6bc771a9dca1e6279cf1d",
".git/objects/8f/ee86d9ba22c2e12b2ce5b9b9d29ed89894a7cc": "de8b8747798a6ab60070be9539c8f627",
".git/objects/9c/cd3b6ecc8d5973c4305a5ca8832068d8aa1b27": "8dbbeb13b007bfe16c28385bd5c77e00",
".git/objects/9d/01881ce3cb6ce447792013bad2c34928e4404d": "84c6c2ef7b3ff4050bad3d91f9f58181",
".git/objects/a0/d1ef031d4e8b872a9044e009d18c548006edf6": "1c85498bcaeec157b2e97aca3346a989",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/756e29a3cd5d8552916067ddc4321384614d3b": "8bba40c2684ac27664e159bab8a7f6eb",
".git/objects/a6/08186d1302ee76cb5c538ea7e1e637f9e0ec88": "b1e95e179c3e8005db77942bd850dc18",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/1db8984c96a7f6d70cd757cc64dde4e6d4cb9c": "ec84f634d7cbf603e30bc56b036f9720",
".git/objects/af/26367a4f618a1d6c0deac5523945a58046a9b7": "3f6dc0faf459178b4ef74624cb863342",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/66260ec0d697304ed3b4b62fbdf5304d13d24b": "541ed17af05d2e6bae4da391164b4446",
".git/objects/c0/6d445d117ce3ad711658d88815649d464503aa": "ba69a34793de0eaca0cf8d423b3a7108",
".git/objects/c5/ca13f93f218263ff19441603e52d64bfe03237": "4c32194dbb03ff4f3742ebb264fe9a27",
".git/objects/cd/621a098553db0428842f0ed73554a5c6305e0e": "6782024bc6b07a055d890074094ef02f",
".git/objects/d0/d9c3fdf5987c00b106c2dd60214703d78ea34f": "b4c0b443debc6936cea3f1290ef869db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/07598e926b542f1623411a1ea96524ae21bb51": "e516ed8e3e4278d01957e034e581dee3",
".git/ORIG_HEAD": "275de88b05e037e4a4f09c69bd633668",
".git/refs/heads/main": "26d612c78983fe5c7043d32eb8a7f257",
".git/refs/remotes/origin/main": "26d612c78983fe5c7043d32eb8a7f257",
"assets/AssetManifest.json": "7120e41f273390658df23ef32307791c",
"assets/assets/graphics/pot-of-gold.png": "c32282c0b1013db9383f1f3a8b8f3881",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8a93bbf3a0cc2edbc14ca5180cea8607",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "fd875f801135a5019ff4619073e828a4",
"icons/Icon-192.png": "1c045243ea9e2a6632b869b51ac576a7",
"icons/Icon-512.png": "529baa4e3a4105ae1ed2f72ea36fb5bf",
"icons/Icon-maskable-192.png": "1c045243ea9e2a6632b869b51ac576a7",
"icons/Icon-maskable-512.png": "529baa4e3a4105ae1ed2f72ea36fb5bf",
"index.html": "46a650e082fae55acc529a111c6f00ce",
"/": "46a650e082fae55acc529a111c6f00ce",
"main.dart.js": "5f4fc26b41e09abc7589d6e73c2393fc",
"manifest.json": "8c8049d0160f7140def417549c55360f",
"version.json": "f3425e679eef62d48343789c2c33ea19"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

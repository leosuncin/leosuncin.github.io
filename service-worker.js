/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","deae95fb06ae96929a9395202dada8f6"],["archives/2019/01/index.html","8bd9cce26b3164d332e916a886718e2d"],["archives/2019/index.html","e40f5499cbe18b7fb82e6f090318fd13"],["archives/index.html","aad5552a260e7c73c3c05a78c82d16a3"],["categories/index.html","29c03309aadf7935ee4befdb968f5c1d"],["css/images/avatar.png","9cec47d1c338653ae88f37a0cd08e3b8"],["css/images/logo.png","c31262248bfa71955d9fef28d0f5700a"],["css/images/thumb-default-small.png","be1fbe7b9056af0004a02a3fbd47ae22"],["css/style.css","e8795cc922b376b26ec96db381d6d166"],["hello-world/index.html","934b15f95937387178f2c94398f2a199"],["index.html","f7ee4cb66e58cef34444960a43541819"],["js/insight.js","c78f5b88fa9b04af3ff758dc968a624c"],["js/main.js","777e45fa7ab6f39a9d622bf995b17da6"],["libs/font-awesome/css/font-awesome.css","7840c31d9836cfbf56fd44fcd397a5ab"],["libs/font-awesome/css/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["libs/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["libs/font-awesome/fonts/fontawesome-webfont.svg","3f26c03c95bc31974db584fe8c33f623"],["libs/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["libs/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["libs/jquery/2.1.3/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["libs/justified-gallery/jquery.justifiedGallery.min.js","7b8f9e0d4b845e90381ae044b8b5e657"],["libs/justified-gallery/justifiedGallery.min.css","9a5e8949e0c84f864668f0205c5fafbd"],["libs/lightgallery/css/lg-fb-comment-box.css","2f6c858e0e17af3c849e6adb84931fc5"],["libs/lightgallery/css/lg-fb-comment-box.min.css","f216c9f755ca3131d5d8abff3eee5193"],["libs/lightgallery/css/lg-transitions.css","52c13990879298da0dae7ec966bbda78"],["libs/lightgallery/css/lg-transitions.min.css","a3330c0ba52c1c1f912fa21966ba7079"],["libs/lightgallery/css/lightgallery.css","ad9f7f4ce165c62426d9fed1cd87a562"],["libs/lightgallery/css/lightgallery.min.css","2a128ed1be3f9be67ef99d92f95845fc"],["libs/lightgallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["libs/lightgallery/fonts/lg.svg","3d2047c9a15c8209a73f45bdb1903902"],["libs/lightgallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["libs/lightgallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["libs/lightgallery/img/loading.gif","b302f9df4ff2c9c4302e2313d422b169"],["libs/lightgallery/img/video-play.png","4f03bd8dec67211ade8abdab39dcbf4a"],["libs/lightgallery/img/vimeo-play.png","699d005153517ee4264615dd1e4e2b64"],["libs/lightgallery/img/youtube-play.png","96bc9d7e27d077372cc0bc9524c500e6"],["libs/lightgallery/js/lg-autoplay.js","a9cd3e0cd3a1b14939bb52a1f434a884"],["libs/lightgallery/js/lg-autoplay.min.js","9cc557cce697d947b82db9c63bec1f56"],["libs/lightgallery/js/lg-fullscreen.js","4109d3f00bbde5371d46253206bfdd28"],["libs/lightgallery/js/lg-fullscreen.min.js","ad666d733183e14359ad2dc3b17ed161"],["libs/lightgallery/js/lg-hash.js","5aae2cd5b773dec96fd8939646fb81a0"],["libs/lightgallery/js/lg-hash.min.js","17182adfcf75dccb64391343c90586ad"],["libs/lightgallery/js/lg-pager.js","41518f8e5c82f1a1e6996e22dbf8018e"],["libs/lightgallery/js/lg-pager.min.js","79ae9590a49eece30be5a7318d2836c6"],["libs/lightgallery/js/lg-share.js","60a401d0754d86131bd588bab80aacb6"],["libs/lightgallery/js/lg-share.min.js","f38dda2f772f0cc5a143e40e0cb96eae"],["libs/lightgallery/js/lg-thumbnail.js","30659fe900db6f9e4cd23c5f91fc871a"],["libs/lightgallery/js/lg-thumbnail.min.js","16d7b8599fddeb7af22cf00684ab2b25"],["libs/lightgallery/js/lg-video.js","1ad77f6e05c1c201f18b9a8d31604a7e"],["libs/lightgallery/js/lg-video.min.js","974a23bceeaada9b60c467129acfc422"],["libs/lightgallery/js/lg-zoom.js","b69e27052dff9df962815c12298fb29d"],["libs/lightgallery/js/lg-zoom.min.js","280784d5d0c1cd5f74c758eb44217149"],["libs/lightgallery/js/lightgallery.js","8f9e4cf7a8c1afe8829f763b2f97172c"],["libs/lightgallery/js/lightgallery.min.js","d8362d715c324c128556fd285143e0af"],["libs/open-sans/styles.css","2549e2582e158d0df62c47a6aa7b084f"],["libs/source-code-pro/styles.css","352a680504614d7fdc64d77960dd9374"],["tags/index.html","0f7bcdb4216efce6a194a1c596d7d330"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








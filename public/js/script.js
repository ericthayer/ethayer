if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    // Success
    console.log('ServiceWorker registration successful');
  }).catch(function(err) {
    // Fail
    console.log('ServiceWorker registration failed: ', err);
  });
}

// import purify from "purify-css"
// const purify = require("purify-css")

// let content = ""
// let css = ""
// let options = {
//     output: "{{ .Site.BaseURL }}static/css"
// }

// purify(content, css, options)
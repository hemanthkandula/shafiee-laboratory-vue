import Vue from "vue";

var path = require('path')
var webpack = require('webpack')
// Add these
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// Renders headlessly in a downloaded version of Chromium through puppeteer
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer


Vue.config.devtools = true

module.exports = {

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new PrerenderSPAPlugin({
            staticDir: '/dist/index.html', // The path to the folder where index.html is.
            routes: [ '/', '/people', '/contact','/positions', '/publications','/404' ], // List of routes to prerender.
            renderer: new PuppeteerRenderer()
        })
    ]

    // ,



}



// plugins: [
//     new PrerenderSPAPlugin(
//         // (REQUIRED) Absolute path to static root
//         path.join(__dirname, 'relative/path/to/static/root'),
//         // (REQUIRED) List of routes to prerender
//         [ '/', '/people', '/contact','/positions', '/publications','/404' ],
//         // (OPTIONAL) Compatible options from v2.
//         {
//             // NOTE: Unless you are relying on asynchronously rendered content,
//             // such as after an Ajax request, none of these options should be
//             // necessary. All synchronous scripts are already executed before
//             // capturing the page content.
//
//             // Wait until a specific event is fired on the document.
//             // captureAfterDocumentEvent: 'custom-post-render-event',
//             // This is how you would trigger this example event:
//             // document.dispatchEvent(new Event('custom-post-render-event'))
//
//             // Wait until a specific element is detected with
//             // document.querySelector.
//             // captureAfterElementExists: '#content',
//
//             // Wait until a number of milliseconds has passed after scripts
//             // have been executed. It's important to note that this may
//             // produce unreliable results when relying on network
//             // communication or other operations with highly variable timing.
//             // captureAfterTime: 5000,
//
//             // path of index file. By default it's index.html in static root.
//             indexPath: path.resolve('/dist/index.html'),
//
//             // Manually transform the HTML for each page after prerendering,
//             // for example to set the page title and metadata in edge cases
//             // where you cannot handle this via your routing solution.
//             //
//             // The function's context argument contains two properties:
//             //
//             // - html :: the resulting HTML after prerendering)
//             // - route :: the route currently being processed
//             //            e.g. "/", "/about", or "/contact")
//             //
//             // Whatever is returned will be printed to the prerendered file.
//             // NOTE: this has been deprecated in favor of the `postProcess` option.
//             // See the documentation below.
//             postProcessHtml: function (context) {
//                 var titles = {
//                     '/': 'Home',
//                     '/people': 'Our Team',
//                     '/contact': 'Contact Us',
//                     '/positions': 'Positions',
//                     '/publications': 'Publications',
//                     '/404': 'Page Not Found'
//
//
//                 }
//                 return context.html.replace(
//                     /<title>[^<]*<\/title>/i,
//                     '<title>' + titles[context.route] + '</title>'
//                 )
//             }
//         },
//
//     )
// ]




// ==UserScript==
// @name         Google Redirect Bypass
// @version      0.1
// @description  Google redirect bypass script.
// @author       Ismail Demirbilek
// @match        https://www.google.com/url*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var params = new URLSearchParams(window.location.search)
    window.location = params.get('url')
})();

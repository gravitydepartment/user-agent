/**
* Gravity Department - User Agent
* https://github.com/gravitydepartment/user-agent
*
* @author    Brendan Falkowski
* @copyright Gravity Department. All rights reserved.
*/


// ==============================================
// User Agent
// ==============================================

var userAgent = {
    ua: '',

    init: function () {
        this.set(navigator.userAgent);
    },

    /**
     * @param {string} ua - User agent string.
     */
    set: function (ua) {
        this.ua = ua.toLowerCase();
    },

    // ----------------------------------------------
    // Detect IE

    isIe: function () {
        return /trident/.test(this.ua);
    },

    isIe10: function () {
        return /trident\/6\.0/.test(this.ua);
    },

    isIe10Down: function () {
        return /msie/.test(this.ua);
    },

    isIe11: function () {
        return /trident\/7\.0/.test(this.ua);
    },

    // ----------------------------------------------
    // Detect iOS characteristics

    // iOS
    isIos: function () {
        return /iphone|ipod|ipad/.test(this.ua);
    },

    // Safari
    isSafari: function () {
        return /safari/.test(this.ua);
    },

    // Standalone (iOS full screen mode)
    isIosStandalone: function () {
        return (typeof window.navigator.standalone !== 'undefined') ? window.navigator.standalone : false;
    },

    // ----------------------------------------------
    // Detect iOS mode

    // iOS Safari
    isIosSafari: function () {
        return (this.isIos() && !this.isIosStandalone() && this.isSafari());
    },

    // iOS Full Screen
    isIosFullScreen: function () {
        return (this.isIos() && this.isIosStandalone() && !this.isSafari());
    },

    // iOS UIWebView
    isIosUiWebView: function () {
        return (this.isIos() && !this.isIosStandalone() && !this.isSafari());
    },

    // ----------------------------------------------
    // Detect unsupported operating systems

    // Old IE
    isOldIe: function () {
        return (
            this.isIe10Down()
        ) ? true : false;
    },

    // Old iOS
    isOldIos: function () {
        return (
            /(iphone|ipod|ipad).* os 4_/.test(this.ua) ||
            /(iphone|ipod|ipad).* os 5_/.test(this.ua) ||
            /(iphone|ipod|ipad).* os 6_/.test(this.ua) ||
            /(iphone|ipod|ipad).* os 7_/.test(this.ua) ||
            /(iphone|ipod|ipad).* os 8_/.test(this.ua)
        ) ? true : false;
    },

    // Old Android
    isOldAndroid: function () {
        return (
            /android 2/.test(this.ua) ||
            /android 3/.test(this.ua) ||
            /android 4.0/.test(this.ua) ||
            /android 4.1/.test(this.ua) ||
            /android 4.2/.test(this.ua) ||
            /android 4.3/.test(this.ua)
        ) ? true : false;
    }
};

userAgent.init();


// ==============================================
// Override the browser's UA for testing
// ==============================================

// ----------------------------------------------
// Android

// 2.2.1
// userAgent.set('Mozilla/5.0 (Linux; U; Android 2.2.1; fr-ch; A43 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1');

// 4.0.4
// userAgent.set('Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19');

// 4.4.0
// userAgent.set('Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36');

// ----------------------------------------------
// Edge

// 12 (Spartan)
// userAgent.set('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0');

// 13
// userAgent.set('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586');

// ----------------------------------------------
// IE

// 10
// userAgent.set('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)');

// 11
// userAgent.set('Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko');

// ----------------------------------------------
// iOS

// 8
// userAgent.set('Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4');

// 10
// userAgent.set('Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.3 (KHTML, like Gecko) Version/10.0 Mobile/14D15 Safari/602.1');

/**
* Gravity Department - User Agent
* https://github.com/gravitydepartment/user-agent
*
* @author     Brendan Falkowski
* @copyright  2017 Gravity Department. All rights reserved.
*/


// ==============================================
// User Agent
// ==============================================

// Create namespaced object to append all methods.
var gravdept = gravdept || {};

// Get user agent
gravdept.userAgent = navigator.userAgent.toLowerCase();



// ==============================================
// Methods
// ==============================================

// iOS
gravdept.isIos = function () {
    return /iphone|ipod|ipad/.test(this.userAgent);
};

// Safari
gravdept.isSafari = function () {
    return /safari/.test(this.userAgent);
};

// Standalone (iOS full screen mode)
gravdept.isStandalone = function () {
    return (typeof window.navigator.standalone !== 'undefined') ? window.navigator.standalone : false;
};


// ----------------------------------------------
// iOS Variations

// iOS Safari
gravdept.isIosSafari = function () {
    return (this.isIos() && !this.isStandalone() && this.isSafari());
};

// iOS Full Screen
gravdept.isIosFullScreen = function () {
    return (this.isIos() && this.isStandalone() && !this.isSafari());
};

// iOS UIWebView
gravdept.isIosUiWebView = function () {
    return (this.isIos() && !this.isStandalone() && !this.isSafari());
};


// ----------------------------------------------
// Unsupported Operating Systems

// Old iOS
gravdept.isOldIos = function () {
    return (
        /(iphone|ipod|ipad).* os 4_/.test(this.userAgent) ||
        /(iphone|ipod|ipad).* os 5_/.test(this.userAgent) ||
        /(iphone|ipod|ipad).* os 6_/.test(this.userAgent) ||
        /(iphone|ipod|ipad).* os 7_/.test(this.userAgent) ||
        /(iphone|ipod|ipad).* os 8_/.test(this.userAgent)
    ) ? true : false;
};

// Old Android
gravdept.isOldAndroid = function () {
    return (
        /android 2/.test(this.userAgent) ||
        /android 3/.test(this.userAgent) ||
        /android 4.0/.test(this.userAgent) ||
        /android 4.1/.test(this.userAgent) ||
        /android 4.2/.test(this.userAgent) ||
        /android 4.3/.test(this.userAgent)
    ) ? true : false;
};



// ==============================================
// Testing
// ==============================================

// var and221 = "Mozilla/5.0 (Linux; U; Android 2.2.1; fr-ch; A43 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
// var and404 = "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19";
// var and440 = "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36";
// var ios8   = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4";
// var ios10  = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.3 (KHTML, like Gecko) Version/10.0 Mobile/14D15 Safari/602.1";

//gravdept.userAgent = and221.toLowerCase();

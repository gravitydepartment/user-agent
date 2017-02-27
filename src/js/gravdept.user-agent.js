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

var gravdept = gravdept || {};

gravdept.ua = {
    // Get user agent
    is: navigator.userAgent.toLowerCase(),


    // ----------------------------------------------
    // Detect iOS characteristics

    // iOS
    isIos: function () {
        return /iphone|ipod|ipad/.test(this.is);
    },

    // Safari
    isSafari: function () {
        return /safari/.test(this.is);
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
    // Detect unsupported Operating Systems

    // Old iOS
    isOldIos: function () {
        return (
            /(iphone|ipod|ipad).* os 4_/.test(this.is) ||
            /(iphone|ipod|ipad).* os 5_/.test(this.is) ||
            /(iphone|ipod|ipad).* os 6_/.test(this.is) ||
            /(iphone|ipod|ipad).* os 7_/.test(this.is) ||
            /(iphone|ipod|ipad).* os 8_/.test(this.is)
        ) ? true : false;
    },

    // Old Android
    isOldAndroid: function () {
        return (
            /android 2/.test(this.is) ||
            /android 3/.test(this.is) ||
            /android 4.0/.test(this.is) ||
            /android 4.1/.test(this.is) ||
            /android 4.2/.test(this.is) ||
            /android 4.3/.test(this.is)
        ) ? true : false;
    }
};



// ==============================================
// Testing
// ==============================================

// Android 2.2.1
// gravdept.ua.is = "Mozilla/5.0 (Linux; U; Android 2.2.1; fr-ch; A43 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1".toLowerCase();

// Android 4.0.4
// gravdept.ua.is = "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19".toLowerCase();

// Android 4.4.0
// gravdept.ua.is = "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36".toLowerCase();

// iOS 8
// gravdept.ua.is = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4".toLowerCase();

// iOS 10
// gravdept.ua.is = "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.3 (KHTML, like Gecko) Version/10.0 Mobile/14D15 Safari/602.1".toLowerCase();

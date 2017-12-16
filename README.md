# GravDept User Agent

Simple methods to test the browser's user agent string.

[![Gravity Department](http://gravitydept.com/_themes/gravdept/img/logo-footer.png)](http://gravitydept.com/)

## Dependencies

- None

## Usage

Include the script in your page:

``` html
<script src="path/to/gravdept.user-agent.js"></script>
```

And call the methods you need:

``` js
if (userAgent.isOldIos() || userAgent.isOldAndroid()) {
    // Warn users their browser is outdated.
}
```

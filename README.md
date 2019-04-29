[![Gravity Department](https://cdn.gravitydept.com/github/repo-header.png)](https://gravitydept.com/)

# GravDept User Agent

Simple methods to test the browser's user agent string.

## Dependencies

- None

## Usage

Include the script in your page:

``` html
<script src="path/to/user-agent.js"></script>
```

And call the methods you need:

``` js
if (userAgent.isOldIos() || userAgent.isOldAndroid()) {
    // Warn users their browser is outdated.
}
```

// Shared Bootstrap loader for static HTML pages.
(function () {
    var cssSelector = 'link[data-bootstrap-local="true"]';
    var iconCssSelector = 'link[data-bootstrap-icons-local="true"]';
    var jsSelector = 'script[data-bootstrap-local="true"]';

    if (!document.querySelector(cssSelector)) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './node_modules/bootstrap/dist/css/bootstrap.min.css';
        link.setAttribute('data-bootstrap-local', 'true');
        document.head.appendChild(link);
    }

    if (!document.querySelector(jsSelector)) {
        var script = document.createElement('script');
        script.src = './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
        script.defer = true;
        script.setAttribute('data-bootstrap-local', 'true');
        document.head.appendChild(script);
    }
    if (!document.querySelector(iconCssSelector)) {
        var iconLink = document.createElement('link');
        iconLink.rel = 'stylesheet';
        iconLink.href = './node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
        iconLink.setAttribute('data-bootstrap-icons-local', 'true');
        document.head.appendChild(iconLink);
    }
})();
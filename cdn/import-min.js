window.addEventListener('load',loadLibrary);function loadLibrary(){var cssLinks=['components/button/button-min.css','components/switch/switch-min.css','components/checkbox/checkbox-min.css','components/search/search-min.css','components/fab/fab-min.css',];cssLinks.forEach(function(link){var cssTag=document.createElement('link');cssTag.rel='stylesheet';cssTag.href='https://paperui.com/'+link;document.head.appendChild(cssTag)});var jsScripts=['components/button/button-min.js','components/switch/switch-min.js','components/checkbox/checkbox-min.js','components/search/search-min.js','components/fab/fab-min.js',];jsScripts.forEach(function(script){var jsTag=document.createElement('script');jsTag.src='https://paperui.com/'+script;jsTag.async=!0;document.head.appendChild(jsTag)})}
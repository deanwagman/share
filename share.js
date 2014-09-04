var SHARE = (function(){
// Private Variables

	// Concats object into URL search parameter
	var makeParamStr = function (obj) {
		var paramStr = "";
		for (var property in obj) {
			if (obj.hasOwnProperty(property)) {
				paramStr += property.toString() + "=" + obj[property] + "&";
			}
		}
		return paramStr;
	};

	var openInNewWindow = function (url, title, w, h) {
		var dualSreenLeft, dualScreenTop, width, height, left, top, newWindow;

        // Fixes dual-screen position                         Most browsers      Firefox
        dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        left = ((width / 2) - (w / 2)) + dualScreenLeft;
        top = ((height / 3) - (h / 3)) + dualScreenTop;

        newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    };

// Public shtuff
	return{
		twitter: function (options) {
			var url = "https://twitter.com/share?" + makeParamStr(options);
			openInNewWindow(url, "twitter", 580, 250);
		},
		facebook: function (href) {
			var url = "https://facebook.com/sharer/sharer.php?u=" + href;
			openInNewWindow(url, "facebook", 580, 368);
		},
		pinterest: function (options) {
			var url = "https://www.pinterest.com/pin/create/button/?" + makeParamStr(options);
			openInNewWindow(url, "pinterest", 750, 320);
		}
	};

})();
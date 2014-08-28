var SHARE = (function(){
	// Private Variables
	var makeParamStr = function (obj) {
		var paramStr = "";
		for (var property in obj) {
			if (obj.hasOwnProperty(property)) {
				paramStr += property.toString() + "=" + obj[property] + "&";
			}
		}
		return paramStr;
	};

// Public shtuff
	return{
		twitter: function (options) {
			var url = "https://twitter.com/share?" + makeParamStr(options);
			window.location = url;
		},
		facebook: function (href) {
			var url = "https://facebook.com/sharer/sharer.php?u=" + href;
			window.location = url;
		},
		pinterest: function (options) {
			var url = "https://www.pinterest.com/pin/create/button/?" + makeParamStr(options);
			window.location = url;
		}
	}	

})();

// setTimeout(function () {
	
// }, 3000);
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
			window.location.assign(url);
		}
	}	

})();

setTimeout(function () {
	SHARE.twitter({
		url: "http://twitter.com",
		via: "deanwagman",
		hashtags: "testing,for,the,win"
	});
}, 3000);
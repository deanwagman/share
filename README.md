SHARE
=====

Simple sharing plugin for twitter facebook pinterest

#Share has three methods.

####Twitter: Accepts an object of options to share

* **url:**	URL of the page to share
* **via:**	Screen name of the user to attribute the Tweet to
* **text:**	Default Tweet text
* **related:**	Related accounts
* **hashtags:**	Comma separated hashtags appended to tweet text
    
####Facebook: Accepts one argument a string
* **string** - Url to share
    
####Pinterest: Accepts an object of options to share
* **url:** Url of the page to share
* **media:** URL of media to pin
* **description:** A description of the pin
    
#To Use:
* Call the Share Object, followed by one of the three methods passing through the arguments it accepts.
  
#Example (using jQuery):

````
// When anchor links with a class of tweet are clicked, collect data from anchor link, and open a window to send to twitter
$('a.tweet').click(function(event){
  event.preventDefault();
  var anchor = $(this);
  
  // Get values from the DOM
  var theURL, theVia, theHashtags;
  theURL = anchor.attr('data-url');
  theVia = anchor.attr('data-via');
  theHashtags = anchor.attr('data-hashtags');
  
  // Pass to SHARE
  SHARE.twitter({
    url: theURL,
    via: theVia,
    hashtags: theHashtags
  });
});
````

#Notes:
* Popups will most likely be blocked by the Browser if share is not called within an event listener.
* Functionality depends on the third party websites. If they change their ish, my stuff don't work.
* Facebook sharing pulls the open graph meta data from the destination website's head tag, which mean's you have to use what that site has set for its sharing settings.
* Thanks for the help Jason

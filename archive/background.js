// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  var imageUrl = 'http://losmanes.files.wordpress.com/2014/02/mountain_peak1.jpg';

  // Look through all the pages in this extension to find one we can use.
  var views = chrome.extension.getViews();
  for (var i = 0; i < views.length; i++) {
    var view = views[i];
    view.setImageUrl(imageUrl);
  }
});
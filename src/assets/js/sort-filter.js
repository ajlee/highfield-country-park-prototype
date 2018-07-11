$(document).ready(function() {

  // If there is a news list and sort filter on this page
  // use the filter buttons to filter by event or news type
  if ($('#news-events-list').length && $('.sort-filter').length) {

    // options to use in filter and sort - matches class names
    var options = {
      valueNames: [ 'name', 'description', 'category' ]
    };

    // define button IDs
    var featureList = new List('news-events-list', options);
    var filterNewsButton = $("#filter-news");
    var filterEventsButton = $("#filter-events");
    var filterResetButton = $("#filter-reset");


    // filter by news items
    filterNewsButton.click(function(){
      featureList.filter(function(item) {

        if (item.values().category == "News") {
          return true;
        } else {
          return false;
        }
      });
      return false;
    });

    // filter by event items
    filterEventsButton.click(function(){
      featureList.filter(function(item) {

        if (item.values().category == "Event") {
          return true;
        } else {
          return false;
        }
      });
      return false;
    });

    // reset filter
    filterResetButton.click(function(){
      featureList.filter(function(item) {
        return true;
      });
      return false;
    });
  }
});


$(window).on('DOMContentLoaded load resize scroll', function () {;
  var images = $("#news-events-list img[data-src]");
  // load images that have entered the viewport
  $(images).each(function (index) {
    if (isElementInViewport(this)) {
      $(this).attr("src",$(this).attr("data-src"));
            $(this).removeAttr("data-src");
    }
  })
  // if all the images are loaded, stop calling the handler
  if (images.length == 0) {
    $(window).off('DOMContentLoaded load resize scroll')
  }
})

// source: http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= $(window).height() &&
        rect.right <= $(window).width()
    );
}

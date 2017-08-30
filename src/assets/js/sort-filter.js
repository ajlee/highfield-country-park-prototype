$(document).ready(function() {

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
});


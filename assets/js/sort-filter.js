
var options = {
  valueNames: [ 'name', 'description', 'category' ]
};


var featureList = new List('news-events-list', options);

var filterNewsButton = document.getElementById("filter-news");
var filterEventsButton = document.getElementById("filter-events");
var filterResetButton = document.getElementById("filter-reset");

filterNewsButton.onclick=function(){
  console.log(1);
  featureList.filter(function(item) {

    if (item.values().category == "News") {
      return true;
    } else {
      return false;
    }
  });
  return false;
};

filterEventsButton.onclick=function(){
  console.log(2);
  featureList.filter(function(item) {

    if (item.values().category == "Event") {
      return true;
    } else {
      return false;
    }
  });
  return false;
};


filterResetButton.onclick=function(){
  console.log(3);
  featureList.filter(function(item) {
    return true;
  });
  return false;
};

featureList.on('updated', function (list) {
  //every updated item take animation with their id
  list.matchingItems.forEach(function (element) {
    var id = element.elm.id;
    console.log(id);

    document.getElementById(id).classList.add('fadeIn');
    document.getElementById(id).classList.add('animated');
  });
});



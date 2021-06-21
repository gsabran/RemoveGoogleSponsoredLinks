var add_ids = ['mbEnd', 'tvcap'];

var remove_add_in_a_few = function(){
    var found = false;
    for (var i = 0; i <= 1000; i += 50) {
        if (found){break;}
        setTimeout(
            function(){
              console.log('removing add after wait');
              remove_ad();
            },
            i
        );
    }
};

var remove_ad = function(){
    for(var i = 0; i < add_ids.length; i++) {
      var ad = document.getElementById(add_ids[i]);
      //if(ad) {ad.parentElement.removeChild(ad);}
    }
};
remove_ad();
remove_add_in_a_few();

window.onpopstate = function (event) {
    // Google does ajax request that don't reload the page
    remove_ad();
    remove_add_in_a_few();
};
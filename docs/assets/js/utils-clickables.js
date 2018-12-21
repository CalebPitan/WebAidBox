/* !
 * @Author Adepitan Caleb
 * Copyright 2018 RealLongman
 *
 * Uses :jQuery Facebook pop sound as (utils-pop.m4a|mp3);
 * Do as you like no terms no conditions
 * 
 */

(function($) {

  'use-strict';
  var clickables = [],
      clickable,
      // edit audio path according to file system
       popSound = new Audio('./assets/sound/utils-pop.m4a');
      clickable = document.getElementsByTagName('a');
  clickables.push(clickable);
  clickable = document.getElementsByTagName('button');
  clickables.push(clickable);
  clickable = document.querySelectorAll('[role=\'button\']');
  clickables.push(clickable);
  $(document).on('click.pop', function(e) {
    for(var i = 0; i < clickables.length; i++) {
      for(var j = 0; j < clickables[i].length; j++) {
        if(e.target == clickables[i][j]) {
          popSound.play();
        }
      }
    }
  });
}(window.jQuery));

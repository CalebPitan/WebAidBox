/* !
 * Utiliser (Modern Utils) 
 * utils-clickables.js v 1.0
 * @Author Adepitan Caleb
 * Copyright 2018 RealLongman
 *
 * Dependencies : jQuery;
 * Uses : Facebook pop sound as (utils-pop.m4a|mp3);
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */

(function($) {

  'use-strict';
  var clickables = [],
      clickable,
      // edit audio path according to file system
       popSound = new Audio('/storage/emulated/0/projects/assets/sound/utils-pop.mp3');
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
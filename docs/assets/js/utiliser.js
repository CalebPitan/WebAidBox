/* !
  * No Licenses, no copyright
  * Do what you like;
  *
  */
(function(w,d){
  var height = w.innerHeight;
  if(w.addEventListener) {
    w.addEventListener('scroll', addDropper);
    w.addEventListener('DOMContentLoaded', addDropper);
  } else {
    w.attachEvent('onscroll', addDropper);
    w.attachEvent('onDOMContentLoaded', addDropper);
  }
  
  function addDropper() {
    
    d.createElement('nav');
    var navbar = d.getElementsByClassName('navbar')[0];
    
    var header = d.getElementsByClassName('header')[0];
    
    var _offset = navbar.offsetHeight;
    
    var offset = (header.offsetHeight);
    
    var headerHeight = (height - _offset) + "px";
    if((window.matchMedia("(max-width: 480px)")).matches) 
      header.style.height = headerHeight;
    
    
    if(d.body.scrollTop > offset || d.documentElement.scrollTop > offset) {
      navbar.style.boxShadow = "0 3px 3px rgba(0,0,0,.2)";
    } else {
      navbar.style.boxShadow = "0 0 0";
    }
  }
})(window,document)
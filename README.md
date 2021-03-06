<p align="center">
  <img src="https://github.com/CalebPitan/WebAidBox/blob/master/WABX128.png"/>
</p>  

# WebAidBox
The web first aid box, a development and production software for making development - build a easy task, and production of amazing UI designs offering great UX all with one tool in your disposal. 
It's compact, powerful, fast, and easy to use on all platforms. 
WebAidBox is a web design utility that leverages your web app with native Operating Systems' app. It is meant to make your web app look stunning with features you may normally not find on the web.  

WebAidBox is written to optimise web designs, providing great functionality for front-end web development. WebAidBox imports new design features into the web and provides easy to use and optimised codes to making work easier. You can finish tedious tasks in few lines of code with WebAidBox.  
## Cardinal.js  
Cardinal.js is a component of **WebAidBox** (and as of now the only component). WebAidBox Cardinal.js is a javascript navigation plugin. Cardinal.js is a compact, fast, non-bloated, easy to use plugin that makes you not to worry about your sites navigation menu and user experience. Cardinal.js offers the side navigation, both left navigation and right navigation. It allows a button to lauch the side navigation as every normal navigation, it provides the hash navigation module to allow the use of the device's back key and the browsers history forward button to close and open navigation, and the best of all is the navigation drawer provided by Cardinal.js. The navigation drawer mirrors the android navigation drawer and works in a stunning way.  

<p align="center">
  <img height="128" width="128" src="https://github.com/CalebPitan/WebAidBox/blob/master/Navigation/img/cardinalX256.png" />
</p>  

### Using Cardinal.js  
The first thing is to import the Cardinal.js script into your markup  
```html
<script src="(...)/cardinal.js"></script>
```  
Where `(...)` is the path to the script.  
When that is done, you are now ready to use the cardinal.js plugin. But wait, one more catch; cardinal.js has a dependency, it requires jQuery to work as it is an extension built on jQuery, so you need this line too:  
```html
<script src="(...)/jQuery.js"></script>
```  
```html
<script>  
    $("menu-btn").nav("init");  
</script>
```  
Where `init` is the command taken by `$.fn.nav`.  
The above code is just introductory in fact the `nav` function takes more than just a command, it also takes a configuration object message. The configuration object helps configure cardinal for you, shows it where to look for the data it needs to keep it up and running. Although cardinal can guess this data and is in one of the cardinal object as `Navigation.fn.defaultConfig`. The guess may be wrong sometimes so it is better to pass the configuration as a javascript object to the function as an argument at `index 1` of the `nav` function. Ideally it should look like this:  
```html
<script>
    $("menu-btn").nav("init", {
        type: "navigation",
        transition: 500,
        event: "click",
        direction: "left",
        backdrop: true,
        backdropClass: "backdrop",
        dataAccessAttribute: "data-target"
    });
</script>
```
`type` property helps to register events, for example `...on("click.navigation", function() {...})`. Transition is used for navigation transitioning and it should be given in milliseconds.  
`event` property specifys default event to open navigation menu.  
`direction` property specifies the position of the navigation on the window. `"left"` means the menu is on the left side on the screen relative to you and slides out from the left to right. `"right"` could be another value
`backdrop` property specifies whether the menu uses backdrop
`backdropClass` property specifies the class for the backdrop element. It can either be `".backdrop"` or `"backdrop"`
`dataAccessAttribute` property specifies the attribute specified on the `menu button $(".menu-btn")...` element that points to either the class or id of the navigation menu.  

### Markup  
```html
...
<a href="#menu" data-target="navigation" title="Menu">Menu</a>
<div class="backdrop"></div>
<div class="main-menu left" id="navigation" data-hash-nav-max-width="767" data-nav-drawer-max-width="767">
    <ul class="override">
        <li>
            <a href="#item1" class="nav-link">Item 1</a>
            ...
        </li>
    </ul>
</div>
...
```
### Styles/CSS
```css
.backdrop {
  background: rgba(0,0,0,.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ...
}
.override {
  text-decoration: none;
  list-style-type: none;
  ...
}
.main-menu {
  width: 300px;
  display: inherit /* Note: not 'none'*/
  position: fixed;
  ...
}
.left {
  left: -300px;/* must be same as width*/
}
.right {
  right: -300px;
}
/*... : means (etc)*/
```
## Licenses
This software is Licensed under Apache 2.0. You may check it out [Apache 2.0 License](http://www.apache.org/licenses/)

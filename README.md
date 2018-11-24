# WebAidBox
Compact, powerful, stunning, fast, and easy to use extension for offering great user experience and unique designs for web apps. 
WebAidBox is a web design utility that leverages your web app with native Operating Systems' app. It is meant to make your web app look stunning with features you may normally not find on the web.  
**Cardinal.js: Powerful navigation drawer mirrors android's**  
![Cardinal logo](https://github.com/CalebPitan/WebAidBox/blob/master/Navigation/img/cardinalX256.png)  
# WebAidBox
WebAidBox is a web utility program written to optimise web designs, providing great functionality for front-end web development. WebAidBox imports new design features into the web and provides easy to use and optimised codes to making work easier. You can finish tedious tasks in few lines of code with WebAidBox.  
## Cardinal.js  
Cardinal.js is a component of **WebAidBox** (and as of now the only component). WebAidBox Cardinal.js is a javascript navigation plugin. Cardinal.js is a compact, fast, non-bloated, easy to use plugin that makes you not to worry about your sites navigation menu and user experience. Cardinal.js offers the side navigation, both left navigation and right navigation. It allows a button to lauch the side navigation as every normal navigation, it provides the hash navigation module to allow the use of the device's back key and the browsers history forward button to close and open navigation, and the best of all is the navigation drawer provided by Cardinal.js. The navigation drawer mirrors the android navigation drawer and works in a stunning way.  
![Cardinal Logo](https://github.com/CalebPitan/WebAidBox/blob/master/Navigation/img/cardinalX256.png)  
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

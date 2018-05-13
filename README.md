# Simple Reorderable List JQuery Plugin

Simple JQuery plugin for reorderable lists.

## Overview

Simple Reorderable List JQuery Plugin is a simple, flexible list plugin. It enables items in a list to be sorted horizontally using the mouse or up and down arrows.

Simple Reorderable List JQuery Plugin depends on jQuery UI and works well with Twitter's Bootstrap.

## Demo

[Basic Demo](https://www.google.com)


### Installing

Bind the plugin with any element.

```javascript
$('.container').reorderable();
```

Pass an array of JavaScript objects with no configuration properties (to invoke default properties) OR choose from the following properties (you can use one or all properties, as required).
**NOTE**: For any property you miss, default property will take place.

```javascript
$('.container').reorderable([
    {
        label: "Text",
        src: "Path to image source",
        color: "Text color",
        backgroundColor: "Background color for the list item"
    }
]);
```
For multiple items, pass an array of objects.

```javascript
var array = [
    {
        //0 index
        label: "Text",
        src: "Path to image source",
        color: "Text color",
        backgroundColor: "Background color for the list item"
    },
    {
        //1 index
        label: "Text",
        src: "Path to image source",
        color: "Text color",
    },
    {
        //2 index
        label: "Text",
        color: "Text color",
    }
]

$('.container').reorderable(array);
```

## Dependencies

* [JQuery](http://api.jquery.com/)
* [JQueryUI](http://jqueryui.com/)




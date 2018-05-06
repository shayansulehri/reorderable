# Shayan Sulehri
# shayan.sulehri@gmail.com
# Reorderable JQuery Plugin

Simple JQuery plugin for reorderable lists.

## Getting Started

Just copy path of index.html into any browser address bar and hit enter to see sample page.
All the JavaScript code is in main.js.

### Installing

Bind the plugin on any container.

```
$('.container').reorderable();
```

Pass an array of JavaScript objects with no configuration properties (to invoke default properties) OR choose from the following properties (you can use one or all properties, as required).
NOTE: For any property you miss, default property will take place.

```
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

```
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

## Built With

* [JQuery](http://api.jquery.com/) - JavaScript Library

## Authors

* **Shayan Sulehri** - *LinkedIn Profile* - [LinedIn](https://www.linkedin.com/in/shayansulehri/)




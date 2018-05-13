/*
 * @Shayan Sulehri
 * Simple Reorderable List JQuery Plugin
 */
;
(function ($, window, document, undefined) {

	"use strict";
	var pluginName = "reorderable",
		//defaults
		defaults = {
			color: "#424242",
			backgroundColor:"#fff",
			//The empty string will help avoiding null checks, during the population of the HTML template
			label:"",
			src:"img/smiley.png"
		};

	// constructor
	function Plugin(element, options) {
		var self = this;
		self.element = element;
		self.settings = [];
		//options can only be passed as array
		if ($.isArray(options)) {
			/**
			 * extending defaults to every item of the list
			 * so if you do not pass config options for any individual
			 * list items, they will take the default properties. This will not
			 * be overriden for the items you have passed config properties.
			 */
			$.each(options, function (i, obj) {
				var opt = $.extend({}, defaults, obj);
				self.settings.push(opt)
			})
			self._defaults = defaults;
			self._name = pluginName;
			self.init();
		} else {
			throw "List items can only be of type Array";
		}
	}
	// Avoid Plugin.prototype conflicts
	$.extend(Plugin.prototype, {
		init: function () {
			this.populateHtml(this.settings);
			this._bind();
		},
		_bind: function () {
			var self = this;
			$(self.element).find('.reorderable-ul li').each(function (i) {
				//binding move up event
				$(this).find('.upArrow').on('click', self.moveUp.bind(self));
				//binding move down event
				$(this).find('.downArrow').on('click', self.moveDown.bind(self));
				//binding remove event
				$(this).find('.remove').on('click', self.remove.bind(self));
				//JQuery UI Sortable for drag and drop sorting
				if(typeof $(this).parent().sortable !== "undefined"){
					$(this).parent().sortable();
				}else{
					//throw warning once
					if(i === 0)
						console.warn("JQuery UI Missing! Please include JQuery UI to drag and drop list items.")
				}
			})
		},
		populateHtml: function (arr) {
			/*
			 * For more complicated problems I prefer to use libraries like 
			 * mustache.js or underscore.js, for the sake of reusability and 
			 * maintainability, but for this particular problem it was easier 
			 * to make an HTML string with variables. 
			 */
			var self = this;
			$(self.element).append("<ul class='reorderable-ul'></ul>")
			//parsing array of list items
			$.each(arr, function (i, obj) {
				var template = "<li class='reorderable-li' title='"+obj.label+"' style='color:"+ obj.color +"; background-color:"+obj.backgroundColor+";'> <div class='left'><div class='info'><img src='"+obj.src+"' width='20' height='20'>"+obj.label+"</div></div><div class='right'><a class='remove' href='javascript:void(0)'><img src='img/cross.png'></a><a class='upArrow' href='javascript:void(0)'><img src='img/up.png'></a><a class='downArrow' href='javascript:void(0)'><img src='img/down.png'></a></div></li>";
				$(self.element).find('.reorderable-ul').append(template);
			})
			self.updateFirstChild();
			self.updateLastChild();
		},
		updateLastChild: function () {
			var lastChild = $(this.element).find('.reorderable-ul li:last-child');
			$(this.element).find('.downArrow').show();
			lastChild.find('.downArrow').hide();
		},
		updateFirstChild: function () {
			var firstChild = $(this.element).find('.reorderable-ul li:first-child');
			$(this.element).find('.upArrow').show();
			firstChild.find('.upArrow').hide();
		},
		moveUp: function (event) {
			var before = $(event.target).closest('li').prev();
			$(event.target).closest('li').insertBefore(before);
			this.updateFirstChild();
			this.updateLastChild();
		},
		moveDown: function (event) {
			var after = $(event.target).closest('li').next();
			$(event.target).closest('li').insertAfter(after);
			this.updateFirstChild();
			this.updateLastChild();
		},
		remove: function (event) {
			$(event.target).closest('li').remove();
			this.updateFirstChild();
			this.updateLastChild();
		}
	});

	try {
		$.fn[pluginName] = function (options) {
			return this.each(function () {
				// preventing multiple instantiations
				if (!$.data(this, "plugin_" + pluginName)) {
					$.data(this, "plugin_" +
						pluginName, new Plugin(this, options));
				}
			});
		};
		//Error handler
	} catch (error) {
		console.log(error)
	}

})(jQuery, window, document);
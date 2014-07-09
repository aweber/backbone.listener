Backbone.Listener
=================
A simple plugin that adds a new object type for easily binding to ``Backbone.Events``
similar to how you can bind to DOM events with ``Backbone.View``.

Requirements
------------
Backbone (tested with 1.1.2)

Example
-------
```javascript
var MyListener = Backbone.Listener.extend({

  events: {
    'bar': 'onBar',
    'foo': 'onFoo'
  },

  onBar: function(message) {
    console.log("onBar: " + message);
  },

  onFoo: function(message) {
    console.log("onFoo: " + message);
  }

});

var listener = new MyListener();

Backbone.trigger('foo', 'bar');
Backbone.trigger('bar', 'baz');
```

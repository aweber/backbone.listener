Backbone.Listener
=================
A simple plugin that adds a new object type for easily binding to events trigged
on the Backbone object similar to how you can bind to DOM events with ``Backbone.View``.

[![Build Status](https://travis-ci.org/aweber/backbone.listener.svg)](https://travis-ci.org/aweber/backbone.listener) [![NPM version](https://badge.fury.io/js/backbone.listener.svg)](http://badge.fury.io/js/backbone.listener)

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

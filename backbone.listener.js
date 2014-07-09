/**
 * Backbone.Native
 *
 * For all details and documentation:
 * http://github.com/AWeber/backbone.listener
 *
 * See LICENSE file for licensing details.
 */

/**
 * the Backbone.Listener class provides similar behavior to Backbone.View's
 * events binding for DOM events, instead binding to the Backbone.Events event
 * stream.
 */
Backbone.Listener = function(attributes, options) {
  var attrs = attributes || {};
  if (options === undefined) options = {};
  this.cid = _.uniqueId('c');
  _.extend(this, _.pick(options, listenerOptions));
  this.bindEvents();
  this.initialize.apply(this, arguments);
};

_.extend(Backbone.Listener.prototype, Backbone.Events, {

  // Initialize is an empty function by default. Override it with your own
  // initialization logic.
  initialize: function(){},

  // Set callbacks, where `this.events` is a hash of
  //
  // *{"event": "callback"}*
  //
  //     {
  //       'eventString'        'callbackMethod',
  //       'other-event':       function(e) { ... }
  //     }
  //
  // pairs. Callbacks will be bound to the view, with `this` set properly.
  bindEvents: function(events) {
    if (!(events || (events = _.result(this, 'events')))) return this;
    for (var key in events) {
      var method = events[key];
      if (!_.isFunction(method)) method = this[events[key]];
      if (!method) continue;
      Backbone.on(key, method);
    }
    return this;
  }

});

var listenerOptions = ['model', 'collection', 'id', 'attributes', 'events'];

Backbone.Listener.extend = Backbone.extend;

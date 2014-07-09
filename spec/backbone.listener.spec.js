describe('Backbone.Listener', function() {

  it('exists under Backbone.Listener', function() {
    expect(Backbone.Listener).toBeDefined();
  });

  describe('constructor', function() {
    it('creates a listener object', function() {
      var listener;
      listener = new Backbone.Listener();
      expect(listener.cid).toBeDefined();
    });
    it('calls bindEvents', function() {
      var listener;
      spyOn(Backbone.Listener.prototype, 'bindEvents');
      listener = new Backbone.Listener();
      expect(listener.bindEvents).toHaveBeenCalled();
    });
    it('calls initialize', function() {
      var listener;
      spyOn(Backbone.Listener.prototype, 'initialize');
      listener = new Backbone.Listener();
      expect(listener.initialize).toHaveBeenCalled();
    });
  });

  describe('bindEvents', function() {
    it('returns itself when there are no events to bind', function() {
      var listener;
      listener = new Backbone.Listener();
      expect(listener.bindEvents()).toMatch(listener);
    });
    it('does not call Backbone.on for invalid functions', function() {
      var listener;
      spyOn(Backbone, 'on');
      listener = new Backbone.Listener();
      listener.bindEvents({'foo': 'onFoo'});
      expect(Backbone.on).not.toHaveBeenCalled();
    });
    it('calls Backbone.on for each event pair', function() {
      var listener, onBar, onFoo;
      spyOn(Backbone, 'on');
      onBar = function() {};
      onFoo = function() {};
      listener = new Backbone.Listener();
      listener.bindEvents({'foo': onFoo, 'bar': onBar});
      expect(Backbone.on).toHaveBeenCalledWith('foo', onFoo);
      expect(Backbone.on).toHaveBeenCalledWith('bar', onBar);
    });
    it('calls Backbone.on for Listener.events attribute values', function() {
      var listener, onFoo;
      spyOn(Backbone, 'on');
      onFoo = function() {};
      listener = new Backbone.Listener({}, {events: {'foo': onFoo}});
      expect(Backbone.on).toHaveBeenCalledWith('foo', onFoo);
    });
  });

});

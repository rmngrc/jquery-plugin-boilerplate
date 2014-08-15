;(function($, window, document, undefined) {

  var pluginName = 'boilerplate';
  var defaults = {};

  // Define your private variables here.


  function Plugin(element, options) {
    var self = this;
    self._element = element;
    self._options = options;
    self._settings = $.extend(defaults, self._options);

    // Do more stuff here.

    this.init();
  }

  /**
   * preventDefault and stopPropagation helper
   *
   * @param {Event} event     Event object
   * @param {Bool}  bubbling  Cancel event bubbling
   *
   * @return {Void}
   */
  var _stopDefault = function(event, bubbling) {
    event.preventDefault();
    if (!bubbling) {
      event.stopPropagation();
    }
  };

  /**
   * Private method
   *
   * @return {Void}
   */
  var _privateMethod = function() {
    console.log('_privatemethod()');
  };

  /**
   * Initialize
   *
   * @return {Void}
   */
  Plugin.prototype.init = function() {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this._element
    // and this._options
  };

  /**
   * Reload
   *
   * @return {Void}
   */
  Plugin.prototype.reload = function() {

  };

  /**
   * Destroy
   *
   * @return {Void}
   */
  Plugin.prototype.destroy = function() {
    
  };


  /**
   * A really lightweight plugin wrapper around the constructor,
   * preventing against multiple instantiations
   */
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  }

})(jQuery, window, document);

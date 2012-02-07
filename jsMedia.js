/**
 * Nicholas C. Zakas 'isMedia' function, with some listeners. 
 */
(function($){
    var div
      , me
      , noop = function() {}
      , windowChanged = false
      , setupTimer
      ;


    setupTimer = function() {
      $(window).resize(function() {
        windowChanged = true;
      });

      window.setInterval(function() {
        if(windowChanged) {
          windowChanged = false;
          $(document).trigger("window-change");
        }
      }, 50);

      // one time only
      setupTimer = noop;
    };

    me = {
      isMedia: function(query) {
        //if the <div> doesn't exist, create it and make sure it's hidden
        if (!div){
            div = document.createElement("div");
            div.id = "ncz1";
            div.style.cssText = "position:absolute;top:-1000px";
            document.body.insertBefore(div, document.body.firstChild);
        }

        div.innerHTML = "_<style media=\"" + query + "\"> #ncz1 { width: 1px; }</style>";
        div.removeChild(div.firstChild);
        return div.offsetWidth == 1;
      }, 
      watch: function(query, onEnter, onExit) {
        var isActive = false;
        onEnter = onEnter || noop;
        onExit = onExit || noop;

        setupTimer();

        $(document).bind("window-change", function() {
          var current = me.isMedia(query);
          if(isActive && !current) {
            onExit(query);
          } else if(!isActive && current) {
            onEnter(query);
          }
          isActive = current;
        });
      }
    };

    $.jsMedia = me;
})(jQuery);

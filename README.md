jsMedia
=======

This is a simple media-query plugin. I'm wrapping Nicholas Zakas' "isMedia" function (http://www.nczonline.net/blog/2012/01/19/css-media-queries-in-javascript-part-2/) 

You can either query against the current media state directly with "isMedia," or else watch the window continuously with "watch" to respond to changes in the page's state.

Example
=======
    $.jsMedia.isMedia("screen and (max-width: 500px)"); // true or false
    $.jsMedia.watch("screen and (max-width: 500px)",
      function(query) { /* fire on entering */ },
      function(query) { /* fire on exiting */ }
    );

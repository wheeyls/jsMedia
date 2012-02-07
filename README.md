jsMedia
=======

This is a very simple function; I'm wrapping Nicholas Zakas' "isMedia" function (http://www.nczonline.net/blog/2012/01/19/css-media-queries-in-javascript-part-2/) and fire off events whenever you move into or out of a given media query.

Example
=======
$.jsMedia.isMedia("screen and (max-width: 500px)"); // true or false
$.jsMedia.watch("screen and (max-width: 500px)",
  function(query) { /* fire on entering */ },
  function(query) { /* fire on exiting */ }
);

(function(win, d) {

  var $ = d.querySelector.bind(d);

  var blob1 = $('#blob-1');
  var blob2 = $('#blob-2');
  var blob3 = $('#blob-3');
  var blob4 = $('#blob-4');
  var blob5 = $('#blob-5');

  var mainBG = $('#primary');

  function onResize () {
    updateElements(win.pageYOffset);
  }

  function onScroll (evt) {
    updateElements(win.pageYOffset);
  }	

  function updateElements (yPos) {
  	//var n_images = $('-background-images > div').length;
    var relativeY = yPos / 350;
    //mainBG.style.backgroundPosition = 'center ' + pos(0, 0, relativeY, 0) + 'px';

    blob1.style.top = pos(0, -1500, relativeY, 0) + 'px';
    blob1.style.left = 0 + 'px';

    blob2.style.top = pos(500, -1500, relativeY, 0) + 'px';
    blob2.style.right = 0 + 'px';

    blob3.style.top = pos(1000, -1500, relativeY, 0) + 'px';
    blob3.style.left = 0 + 'px';

    blob4.style.top = pos(1500, -1500, relativeY, 0) + 'px';
    blob4.style.right = 0 + 'px';

    blob5.style.top = pos(2000, -1500, relativeY, 0) + 'px';
    blob5.style.left = 0 + 'px';

  }

  function pos(base, range, relY, offset) {
    return base + limit(0, 1, relY - offset) * range;
  }

  function prefix(obj, prop, value) {
    var prefs = ['webkit', 'moz', 'o', 'ms'];
    for (var pref in prefs) {
      obj[prefs[pref] + prop] = value;
    }
  }

  function limit(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }

  (function() {

    updateElements(win.pageYOffset);

    /*blob1.classList.add('force-show');
    blob2.classList.add('force-show');
    blob3.classList.add('force-show');
    blob4.classList.add('force-show');
    blob5.classList.add('force-show');*/
  })();

  win.addEventListener('resize', onResize, false);
  win.addEventListener('scroll', onScroll, false);

})(window, document);

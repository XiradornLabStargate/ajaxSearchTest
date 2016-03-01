(function() {
  var c, targ, x, xhr;

  x = document.getElementById('btn');

  targ = document.getElementById('areaDisplay');

  c = document.getElementById('city');

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  x.onclick = function(event) {
    var city;
    city = document.getElementById('city').value;
    xhr.open('GET', 'engine.php?city=' + city, true);
    xhr.send();
    return xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        return targ.innerHTML = xhr.responseText;
      }
    };
  };

  c.onkeyup = function(event) {
    var city;
    city = document.getElementById('city').value;
    xhr.open('GET', 'engine.php?city=' + city, true);
    xhr.send();
    return xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        return targ.innerHTML = xhr.responseText;
      }
    };
  };

}).call(this);

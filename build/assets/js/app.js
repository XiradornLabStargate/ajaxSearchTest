(function() {
  var c, targ, x, xhr, xhrfn;

  x = document.getElementById('btn');

  targ = document.getElementById('areaDisplay');

  c = document.getElementById('city');

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  x.onclick = function(event) {
    return xhrfn();
  };

  c.onkeyup = function(event) {
    return xhrfn();
  };

  xhrfn = function() {
    var city;
    city = document.getElementById('city').value.toLowerCase();
    xhr.open('GET', 'engine.json', true);
    xhr.send();
    return xhr.onreadystatechange = function() {
      var aj;
      if (xhr.readyState === 4 && xhr.status === 200) {
        aj = JSON.parse(xhr.responseText);
        if (aj[city]) {
          return targ.innerHTML = aj[city];
        } else {
          return targ.innerHTML = "Non ho trovato quello che cerchi mi dispiace";
        }
      }
    };
  };

}).call(this);

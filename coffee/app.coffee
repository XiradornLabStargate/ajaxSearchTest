x = document.getElementById('btn')
targ = document.getElementById('areaDisplay')
c = document.getElementById('city')

if window.XMLHttpRequest
    xhr = new XMLHttpRequest()
else
    xhr = new ActiveXObject("Microsoft.XMLHTTP")

x.onclick = (event) ->
    city = document.getElementById('city').value;
    # http request
    xhr.open('GET', 'engine.php?city='+city, true)
    xhr.send()
    #http response
    xhr.onreadystatechange = ->
        # console.log xhr
        if xhr.readyState == 4 and xhr.status == 200
            targ.innerHTML = xhr.responseText

c.onkeyup = (event) ->
    city = document.getElementById('city').value;
    # http request
    xhr.open('GET', 'engine.php?city='+city, true)
    xhr.send()
    #http response
    xhr.onreadystatechange = ->
        # console.log xhr
        if xhr.readyState == 4 and xhr.status == 200
            targ.innerHTML = xhr.responseText

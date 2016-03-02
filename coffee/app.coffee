x = document.getElementById('btn')
targ = document.getElementById('areaDisplay')
c = document.getElementById('city')

if window.XMLHttpRequest
    xhr = new XMLHttpRequest()
else
    xhr = new ActiveXObject("Microsoft.XMLHTTP")

x.onclick = (event) ->
    xhrfn()

c.onkeyup = (event) ->
    xhrfn()

xhrfn = () ->
    city = document.getElementById('city').value.toLowerCase()
    # http request
    xhr.open('GET', 'engine.json', true)
    xhr.send()
    #http response
    xhr.onreadystatechange = ->
        # console.log xhr
        if xhr.readyState == 4 and xhr.status == 200
            aj = JSON.parse xhr.responseText

            if aj[city]
                targ.innerHTML = aj[city]
            else
                targ.innerHTML = "Non ho trovato quello che cerchi mi dispiace"

const ping = require('jjg-ping')

var delay = 3000
var lowMS = 20
var highMS = 100
var veryhighMS = 600
var status = null

function GetMs() {
    ping.system.ping('google.com', function(latency, status) {
        if (status) {
            document.getElementById("ms").innerHTML = latency + '<span>ms</span>'
            if (latency <= lowMS) {
                status = 'Low'
            } else if (latency > lowMS && latency <= highMS) {
                status = 'Normal'
            } else if (latency > highMS && latency <= veryhighMS) {
                status = 'High'
            } else {
                status = 'Very High'
            }
            document.getElementById("status").innerHTML = status
        }
    })
}

GetMs()

setInterval(function() {
    GetMs()
}, delay);

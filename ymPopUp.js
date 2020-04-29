(function () {
    console.log('inside custom script')
    window.addEventListener("message", function (event) {
        try {
            event = JSON.parse(event.data);
        } catch (error) {
            event = {}
        }
        if (event.event_code === 'custom-event') {
            iframe = document.getElementById('ymIframeId');
            var eventData = event.data.data;
            console.log(eventData, 'event data');
            switch (event.data.code) {
                case "login":
                    var myWindow = window.open(eventData.url, "new window", "height=500, width=500, top=400, left=400");
                    return;
                case "logout":
                    localStorage.clear()
                    window.location.reload()
                default:
                    console.log('No event handler defined for ' + event.data.code);
                    return;
            }
        }
    }, false);
})();

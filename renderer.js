var constraints = { audio: false, video: { width: 1920, height: 1080 } };

navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        alert(err.name + ": " + err.message);
    });

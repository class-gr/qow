var video = document.getElementById("videoPlayer");
video.addEventListener("loadedmetadata", function() {
  var mediaSource = new MediaSource();
  video.src = URL.createObjectURL(mediaSource);
  
  mediaSource.addEventListener("sourceopen", function() {
    var sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="hev1"');
    
    fetch("your_video_file.hevc")
      .then(function(response) {
        return response.arrayBuffer();
      })
      .then(function(arrayBuffer) {
        sourceBuffer.addEventListener("updateend", function() {
          if (!sourceBuffer.updating && mediaSource.readyState === "open") {
            mediaSource.endOfStream();
          }
        });
        
        sourceBuffer.appendBuffer(arrayBuffer);
      });
  });
});
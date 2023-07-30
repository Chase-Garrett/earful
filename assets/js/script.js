// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code doesn't run until the DOM is finished loading
$(function () {
    // create youtube api url
    var youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

    // create youtube api key
    var youtubeApiKey = "AIzaSyCPMSYfJmdJ5lPXKyA8YkBfc7O8tu8i9ks";

    // create function to embed video
    function embedVideo(data) {
        // get video id from data object
        var videoId = data.items[0].id.videoId;
        // create video url
        var videoUrl = "https://www.youtube.com/embed/" + videoId;
        // edit iframe src attribute to embed video
        $("iframe").attr("src", videoUrl);
    }

    // add click event to playlist items
    $("#playlist li").click(function() {
        // get text of clicked playlist item
        var searchText = $(this).text();
        // create youtube api data object
        var youtubeApiData = {
            key: youtubeApiKey,
            q: searchText,
            part: "snippet",
            maxResults: 1,
            type: "video",
            videoEmbeddable: "true",
        };
        // make ajax call to youtube api
        $.ajax({
            type: "GET",
            url: youtubeApiUrl,
            data: youtubeApiData,
            dataType: "json",
        success: function(data) {
            embedVideo(data);
        },
        error: function(response) {
            console.log("Request Failed");
        }});
    });
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code doesn't run until the DOM is finished loading
$(function () {
  var playlistArray = [];

  // Fetches 30 pop songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getPopSongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=pop&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }

  // Fetches 30 rock songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getRockSongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=rock&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }
  
  // Fetches 30 R&B songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getRBSongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=rb&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }
  
  // Fetches 30 rap songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getRapSongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=rap&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }
  
  // Fetches 30 country songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getCountrySongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=country&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }

  // Fetches 30 songs from the Genius API, calls the randomizeSongs() function,
  // and passes the array of randomized songs to the playlistArray
  function getAllSongs() {
    var url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&chart_genre=all&per_page=30&page=1';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        playlistArray = randomizeSongs(data);
      });
  }
  
  // Randomizes the songs, stores the full title of each song into the randomizedArray, and returns that array
  function randomizeSongs(data) {
    var songs = data.chart_items;
    randomizedArray = [];
  
    for (var i = songs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
  
    for (var i = 0; i < songs.length; i++) {
      var fullTitle = songs[i].item.full_title;
      randomizedArray.push(fullTitle);
    }
  
    return randomizedArray;
  }
  
  var popSearchButton = document.getElementById('pop');
  popSearchButton.addEventListener('click', getPopSongs);
  
  var rockSearchButton = document.getElementById('rock');
  rockSearchButton.addEventListener('click', getRockSongs);
  
  var rbSearchButton = document.getElementById('rb');
  rbSearchButton.addEventListener('click', getRBSongs);
  
  var rapSearchButton = document.getElementById('rap');
  rapSearchButton.addEventListener('click', getRapSongs);
  
  var countrySearchButton = document.getElementById('country');
  countrySearchButton.addEventListener('click', getCountrySongs);

  var allSearchButton = document.getElementById('all');
  allSearchButton.addEventListener('click', getAllSongs);
});

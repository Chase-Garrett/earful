// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code doesn't run until the DOM is finished loading
$(function () {
  var playlistArray = [];
  var inputElement = document.getElementById('song-search');

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

  function songSearch() {
    var searchValue = inputElement.value;
    var url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchValue}&per_page=10&page=1`;
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
        // Clear previous search results
        var searchResultsContainer = document.getElementById('search-results');
        searchResultsContainer.innerHTML = '';
  
        // Create buttons for each search result (total of 10)
        var hits = data.hits;
        for (var i = 0; i < hits.length; i++) {
          var button = document.createElement('button');
          button.className = 'button is-link m-2'; // Change classes based on desired Bulma CSS
          button.textContent = hits[i].result.full_title;
  
          button.addEventListener('click', function (event) {
            // Handle button click event here (like passing text content to Youtube API)
            console.log(event.target.textContent);
          });
  
          searchResultsContainer.appendChild(button);
        }
      });
  }
  
  var popSearchButton = document.getElementById('pop-btn');
  popSearchButton.addEventListener('click', getPopSongs);
  
  var rockSearchButton = document.getElementById('rock-btn');
  rockSearchButton.addEventListener('click', getRockSongs);
  
  var rbSearchButton = document.getElementById('r&b-btn');
  rbSearchButton.addEventListener('click', getRBSongs);
  
  var rapSearchButton = document.getElementById('rap-btn');
  rapSearchButton.addEventListener('click', getRapSongs);
  
  var countrySearchButton = document.getElementById('country-btn');
  countrySearchButton.addEventListener('click', getCountrySongs);

  var allSearchButton = document.getElementById('all-btn');
  allSearchButton.addEventListener('click', getAllSongs);

  var submitSearchButton = document.getElementById('submit');
  submitSearchButton.addEventListener('click', songSearch);
});

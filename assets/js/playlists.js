var spotify_api_key = '1db2eac78emsha758dc391663482p1289b7jsn45dfc336be15'
var playlists_container = document.getElementById("playlists-container")

var getPlaylists = function() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': spotify_api_key,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    var emotion = localStorage.getItem('emotion')
    fetch(`https://spotify23.p.rapidapi.com/search/?rapidapi-key=${spotify_api_key}&q=${emotion}&type=playlists&limit=5`, options)

      .then(function (response) {
        if (response.ok) {
          response.json().then(function (response) {
            console.log(response.playlists.items);
            for (i=0; i < 5; i++) {
                var playlist = document.createElement('a')
                var playlistURI = response.playlists.items[i].data.uri
                var playlistID = playlistURI.substring(17);
                playlist.setAttribute('href', `https://open.spotify.com/playlist/${playlistID}`)
                playlist.setAttribute('target', '_blank')
                var imgURL = response.playlists.items[i].data.images.items[0].sources[0].url
                var playlistName = response.playlists.items[i].data.name
                playlist.innerHTML = '<img src = "'+imgURL+'"> '+playlistName+'';
                playlists_container.append(playlist)
            }
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Cannot connect to Spotify API');
      });
  }

  getPlaylists();

  document.addEventListener('click',function(event){
    var element = event.target
    if (element.matches('#back')){
     window.location.href="index.html";
    }
  });
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
    //   .then(response => response.json())
    //   .then(response => 
    //     console.log(response.playlists.items)
    //     var playlist = document.createElement('div')
    //     playlist.textContent = response.playlists.items
    //     document.append(playlist)
    //     )
    //   .catch(err => console.error(err));


      .then(function (response) {
        if (response.ok) {
          response.json().then(function (response) {
            console.log(response.playlists.items);
            for (i=0; i < 5; i++) {
                var playlist = document.createElement('div')
                playlist.textContent = response.playlists.items[i].data.uri
                playlists_container.append(playlist)
            }
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Cannot connect to Spoltify API');
      });
  }

  getPlaylists();
var spotify_api_key = '1db2eac78emsha758dc391663482p1289b7jsn45dfc336be15'

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
      .then(response => response.json())
      .then(response => console.log(response.playlists.items))
      .catch(err => console.error(err));
  }

  getPlaylists();
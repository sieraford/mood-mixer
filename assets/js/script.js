var happy     = document.querySelector('#happy') 
var sad       = document.querySelector('#sad')
var focused   = document.querySelector('#focused')
var angry     = document.querySelector('#angry')
var chill     = document.querySelector('#chill')
var energized = document.querySelector('#energized')
var stressed  = document.querySelector('#stressed')
var surprised = document.querySelector('#surprised')
var spotify_api_key = '1db2eac78emsha758dc391663482p1289b7jsn45dfc336be15'

var getGiphy = function (emotion) {
    var apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=cb1oKYtXnqzw1OxM4W0118EofVY86Hja&tag=${emotion}&limit=1`;
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            var imgURL = data.data.images.fixed_height.url;
            console.log(imgURL);
            document.getElementById(`${emotion}`).innerHTML = '<img id='+emotion+' src = "'+imgURL+'">';
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Cannot connect to Giphy API');
      });
  };
  
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
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  getGiphy("happy");
  getGiphy("sad");
  getGiphy("focused");
  getGiphy("angry");
  getGiphy("chill");
  getGiphy("energized");
  getGiphy("stressed");
  getGiphy("surprised");
  getPlaylists();


  document.addEventListener('click',function(event){
    var element = event.target
    if (element.matches('img')){
     localStorage.setItem('emotion', element.id)

     window.location.href="playlists.html";
    }
  });

  document.addEventListener('click',function(event){
    var element = event.target
    if (element.matches('#back')){
     window.location.href="index.html";
    }
  });
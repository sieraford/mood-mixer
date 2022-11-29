var happy     = document.querySelector('#happy') 
var sad       = document.querySelector('#sad')
var focused   = document.querySelector('#focused')
var angry     = document.querySelector('#angry')
var chill     = document.querySelector('#chill')
var energized = document.querySelector('#pumped')
var stressed  = document.querySelector('#stressed')
var surprised = document.querySelector('#party')


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

  getGiphy("happy");
  getGiphy("sad");
  getGiphy("focused");
  getGiphy("angry");
  getGiphy("chill");
  getGiphy("pumped");
  getGiphy("stressed");
  getGiphy("party");

  document.addEventListener('click',function(event){
    var element = event.target
    if (element.matches('img')|| element.matches('h3')){
     localStorage.setItem('emotion', element.id)

     window.location.href="playlists.html";

    }
  });
  
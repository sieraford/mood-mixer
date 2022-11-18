var getGiphy = function () {
    var apiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=cb1oKYtXnqzw1OxM4W0118EofVY86Hja&tag=happy&limit=1';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            var imgURL = data.data.images.downsized_large.url;
            console.log(imgURL);
            document.getElementById("giphyme").innerHTML = '<img src = "'+imgURL+'" title="happy gif">';
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('');
      });
  };

  getGiphy();
//fetch("http://www.omdbapi.com/?apikey=[98dcba67]&");
/*fetch("http://www.omdbapi.com/?apikey=[98dcba67]&")
  .then((response) => response.data())
  .then((data) => console.log(data));
  .catch(err)
  console.log(err)
get("http://www.omdbapi.com/?apikey=[98dcba67]&");*/

//var listedMovie = document.
var button = document.getElementById("movieSearch");
console.log(button);
button.addEventListener("click", getData);
function getData() {
  var inputValue = document.getElementById("search").value;
  var url = "http://www.omdbapi.com/?apikey=98dcba67&s=" + inputValue;
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.Search);
      //var data = data.result;
      var ul = document.getElementById("list");
      for (var i = 0; i < data.Search.length; i++) {
        var createLi = document.createElement("li");
        createLi.innerHTML = data.Search[i].Title;
        ul.appendChild(createLi);
      }
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getData();

function removeItems(li) {
  document.getElementsByTagName(li);
  for (var i = 0; i < li.length; i++) {
    li.splice;
  }
}

/*var unorderedList = document.createElement(ul);
var element = document.getElementById("ul");
element.appendChild(li);*/

//var i = document.getElementById("input");
//input.innerHTML= "inputValue";
//var l = document.getElementById("movies");
/* for (var i = 0; i > data.length; i++) {
        console.log(data[i]);
        //movies.innerHTML = "data[i]";
        if (data[i].id === "") {
          console.log([i]);
        }
      }
    })*/

//getData((l.innerHTML = document.getElementById("search")));

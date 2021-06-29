//fetch("http://www.omdbapi.com/?apikey=[98dcba67]&");
/*fetch("http://www.omdbapi.com/?apikey=[98dcba67]&")
  .then((response) => response.data())
  .then((data) => console.log(data));
  .catch(err)
  console.log(err)
get("http://www.omdbapi.com/?apikey=[98dcba67]&");*/
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=98dcba67&s=love")
  .then(function (response) {
    console.log(response);
    //return response.json()
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// require("dotenv").config();

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var userChoice = process.argv[2];

var userThing = process.argv[3];

switch (userChoice) {
    case "concert-this":
        concertThis(userThing);
        break;
    case "spotifyThisSong":
        spotifyThisSong(userThing);
        break;
    case "movie-this":
        movieThis(userThing);
        break;
    case "do-what-it-says":
        doWhatItSays(userThing);
        break;
};

function concertThis(userThing) {
    axios.get("https://rest.bandsintown.com/artists/" + userThing + "/events?app_id=codingbootcamp").then(function(response) {
            console.log("Artist: " + userThing)
            console.log("Name of the venue: ", response.data[0].venue.name);
            console.log("Venue location: " + response.data[0].venue.city);
            var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log("Date of the event: " + eventDate);
        })
        .catch(function (error) {
            console.log(error);
          });
      }
    
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var userChoice = process.argv[2];

var userThing = process.argv[3];

switch (userChoice) {
    case "concert-this":
        concertThis(userThing);
        break;
    case "spotify-this-song":
        if (!userThing) {
            defaultSpotify()
        } else {
        spotifyThisSong(userThing)};
        break;
    case "movie-this":
        movieThis(userThing);
        break;
    case "do-what-it-says":
        doWhatItSays(userThing);
        break;
    default:
        break;
};

function concertThis(userThing) {
    axios.get("https://rest.bandsintown.com/artists/" + userThing + "/events?app_id=codingbootcamp").then(function (response) {
        //console.log(response);
        //console.log(response.data);
        console.log("Name of the venue: ", response.data[0].venue.name);
        console.log("Venue location: " + response.data[0].venue.city);
        var eventDate = moment(response.data[0].datetime).format("MM/DD/YYYY");
        console.log("Date of the event: " + eventDate);
    })
        .catch(function (error) {
            console.log(error);
        });
}

function spotifyThisSong(userThing) {

    spotify
        .search({ type: 'track', query: userThing })
        .then(function (response) {
            //console.log(JSON.stringify(response));
            for (var i=0; i<response.tracks.items[i].album.artists[0].name.length; i++) {
            console.log("Artist(s): ", response.tracks.items[i].album.artists[0].name);

            console.log("The song's name: ", response.tracks.items[i].name);

            console.log("Preview link of the song from Spotify: ", response.tracks.items[i].preview_url);

            console.log("The album that the song is from: ", response.tracks.items[i].album.name)
            }
            
        })
        .catch(function (err) {
            console.log(err);
        });
}

function defaultSpotify (){

    spotify
        .search({ type: 'track', query: "The Sign" })
        .then(function (response) {
            //console.log(JSON.stringify(response));
            for (var i=0; i<response.tracks.items[i].album.artists[0].name.length; i++) {
                if (response.tracks.items[i].album.artists[0].name === "Ace of Base") {
                    console.log("Artist(s): ", response.tracks.items[i].album.artists[0].name);

                    console.log("The song's name: ", response.tracks.items[i].name);
        
                    console.log("Preview link of the song from Spotify: ", response.tracks.items[i].preview_url);
        
                    console.log("The album that the song is from: ", response.tracks.items[i].album.name)
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis(userThing) {
    if (!userThing) {
        userThing = "Mr.Nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + userThing + "&y=&plot=short&apikey=trilogy").then(function (response) {
        //console.log(response);
        //console.log(response.data)
        console.log("Title of the movie: " + response.data.Title);
        console.log("Year the movie came out: " + response.data.Year);
        console.log("IMDB Rating of the movie: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
        console.log("Country where the movie was produced: " + response.data.Country);
        console.log("Language of the movie: " + response.data.Language);
        console.log("Plot of the movie: " + response.data.Plot);
        console.log("Actors in the movie: " + response.data.Actors);
    })
        .catch(function (error) {
            console.log(error);
        });






}
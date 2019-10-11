# LIRI - Language Interpretation and Recognition

A command line node app that takes in parameters and displays requested data.

## How It Works

* LIRI searches and displays data, depending on the selected operation.
* For Bands in Town, LIRI searches for concerts and displays concert information.
* For Spotify, LIRI searches for songs and displays music information. A default song information is displayed if no song search parameter is entered.
* For OMDB or the Open Movie Database, LIRI searches for movies and displays film information. A default movie information is displayed if no song search parameter is entered.
* Enter search parameters either in Terminal or within a TXT document.

## Motivation

To help users find database information on musical concerts, songs, and movies, using the Terminal, within the Node.js environment (outside the browser). User can also enter search parameters within a text document and execute searches from Terminal.

## Technical

* APIs from: Bands in Town, Spotify, and OMDB.
* Node.js.
* NPM Axios.
* NPM DotEnv.
* NPM Moment.

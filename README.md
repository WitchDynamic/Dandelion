<h1 align="center">
  <img src="https://raw.githubusercontent.com/WitchDynamic/Dandelion/deployment/client/src/images/DandelionIconWhite.png" alt="downshift logo" title="downshift logo" width="35">
  Dandelion 
  </br>
</h1>
<p align="center" style="font-size: 1.2rem;">A Network visualization React app for graphing Spotify top artists and their relationships.
</br></br>
<a href="https://dandelion-82b1.onrender.com/">Check out Dandelion here!</p>
<hr />

## About The App
Dandelion is a visualization tool that plots the relationships between the user's preferred artists from Spotify. This paints a picture of their general listening pattern.
It offers insight into potential new artists the user might also enjoy. This app is fully interactive and utilizes open source tools to offer a unique and fun web experience!

## Features
Filter the top artists shown by selecting the time range and the amount of artists to fetch

Time Range
> Short Term: Last 4 weeks of listening data
> 
> Medium Term: Approximately last 6 months worth of data
> 
> Long Term: Calculated from several years of data and including all new data as it becomes available

Artist Range
> Amount of top artists to display on the graph
> 1, 5, 10, 20, 30, 40, 50

Media player

> Select any artist to instantly play their top songs. 
> 
> Liking a song automatically adds it to your Spotify liked songs playlist.
> 
> Web playback allows you to control what device the music plays on directly from the app.


## Screenshots
<img src="https://imgur.com/pYJFOme.png" alt="Dandelion Landing Page" width="950">
</br></br>
<img src="https://imgur.com/ZfWkelD.png" alt="Dandelion Dashboard" width="950">
</br></br>
<img src="docs/DandelionGif.gif" alt="Dandelion Gif" width="950">

## Technologies
### Front-End:
- React
- Redux
- Material UI and JSS
- vis.js
- Axios

### Back-End:
- Node.js
- Express
- Authorization code flow

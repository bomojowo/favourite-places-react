import React from "react";
import Place from "./Place";
//import Places from "./places.json"
import "./App.css";
//import LondonEye from "./images/london-eye.png";

//another way of indexing into object from json file
// function getTitles(places: string){
//   return (<Place
//   placeTitle={places}
//   placePicture={Places.places[0].picture}
//   placeName={Places.places[0].name}
//   placeCountry={Places.places[0].country}
//   placeWhy={Places.places[0].why}
//   placeMap={Places.places[0].map}
// />)
// }

function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-border">My Favourite Places </h1>
      </header>
      <main className="main-content">
        <Place />
      </main>
      <footer className="footer-content">
        <h1> Find more stuff below</h1>
        
        <a href="https://github.com/bomojowo" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
      </footer>
    </div>
  );
}

export default App;

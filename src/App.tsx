import React from "react";
import Place from "./Place";
import Places from "./places.json"
import "./App.css";
//import LondonEye from "./images/london-eye.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-border">My Favourite Places </h1>
      
      </header>
      <main className="main-content">
      
        <Place
          placeTitle={Places.places[0].title}
          placePicture={Places.places[0].picture}
          placeName={Places.places[0].name}
          placeCountry={Places.places[0].country}
          placeWhy={Places.places[0].why}
          placeMap={Places.places[0].map}
        />
        <Place
           placeTitle={Places.places[1].title}
           placePicture={Places.places[1].picture}
           placeName={Places.places[1].name}
           placeCountry={Places.places[1].country}
           placeWhy={Places.places[1].why}
           placeMap={Places.places[1].map}
        />
         <Place
           placeTitle={Places.places[2].title}
           placePicture={Places.places[2].picture}
           placeName={Places.places[2].name}
           placeCountry={Places.places[2].country}
           placeWhy={Places.places[2].why}
           placeMap={Places.places[2].map}
        />
         <Place
           placeTitle={Places.places[3].title}
           placePicture={Places.places[3].picture}
           placeName={Places.places[3].name}
           placeCountry={Places.places[3].country}
           placeWhy={Places.places[3].why}
           placeMap={Places.places[3].map}
        />
      </main>
      <footer className="footer-content">
        <h1> Find more stuff below</h1>
        
        <a href="https://github.com/bomojowo" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
      </footer>
    </div>
  );
}

export default App;

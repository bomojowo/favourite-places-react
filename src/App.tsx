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
          placeTitle={"Leaning Tower of Pisa"}
          placePicture={
            "https://cdn.britannica.com/88/80588-050-8D944BFE/Leaning-Tower-of-Pisa-Italy.jpg"
          }
          placeName={"Pisa"}
          placeCountry={"Italy"}
          placeWhy={
            "placeholder"
          }
          placeMap={
            "https://www.google.com/maps/d/viewer?mid=1ckb0UEWs8I1USGNHmNJqnLBfFnc&ie=UTF8&oe=UTF8&msa=0&ll=43.723303999999985%2C10.394160999999999&z=17"
          }
        />
         <Place
          placeTitle={"Disneyland Florida"}
          placePicture={
            "https://images.unsplash.com/photo-1599059721913-8df7f348af04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzbmV5JTIwbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          }
          placeName={"Orlando Florida"}
          placeCountry={"Unied States"}
          placeWhy={
            "placeholder"
          }
          placeMap={
            "https://www.google.com/maps/place/Walt+Disney+World%C2%AE+Resort/@28.3771857,-81.5729287,17z/data=!3m1!4b1!4m5!3m4!1s0x88dd7ee634caa5f7:0xa71e391fd01cf1a0!8m2!3d28.3771857!4d-81.57074"
          }
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

import React from "react";
import Place from "./Place";
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
          placeTitle={"London Eye"}
          placePicture={
            "https://images.unsplash.com/photo-1523590564318-491748f70ea7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          }
          placeName={"London"}
          placeCountry={"England"}
          placeWhy={
            "Even though i dont like heights, its good for bonding time. It's nice to see the whole of London at night too!"
          }
          placeMap={
            "https://www.google.com/maps/d/viewer?mid=1Yv2q2kSjL-2fqJczikCqxQGiJy8&msa=0&ll=51.503220000000034%2C-0.11955100000000662&z=17"
          }
        />
        <Place
          placeTitle={"Effiel Tower"}
          placePicture={
            "https://images.unsplash.com/photo-1578946086429-98dbab17a54f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWZmaWVsJTIwdG93ZXIlMjBwYXJpc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          }
          placeName={"Paris"}
          placeCountry={"France"}
          placeWhy={
            "placeholder"
          }
          placeMap={
            "https://www.google.com/maps/d/viewer?mid=1I-xxMzYPZtirHwEBi46D3K5wc-U&ie=UTF8&oe=UTF8&msa=0&ll=48.858278000000006%2C2.2943829999999954&z=17"
          }
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
        <h1> Add Stuff Here</h1>
        
        <a href="https://github.com/bomojowo" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
      </footer>
    </div>
  );
}

export default App;

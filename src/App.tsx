import React from "react";
import Place from "./Place";
import "./App.css";
import LondonEye from "./images/london-eye.png";

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
            "https://www.google.com/maps/d/viewer?mid=1Pj2ly5dkJoaHqvs6qMmwFA6uajQ&msa=0&ll=51.51532899201109%2C-0.20983750926209188&spn=0.00078%2C0.001682&z=18"
          }
        />
        <section>
          <div>
            <h3>Eveyrhting underneath this is just placeholder!</h3>
          </div>
          London Eye
          <div>
            <img className="london-eye" src={LondonEye} alt="London Eye" />
          </div>
        </section>
        <section>Effiel Tower</section>
        <section>Leaning Tower of Pisa</section>
        <section>Disney Land Florida</section>
      </main>
      <footer className="footer-content">
        <h1>Add Stuff Here</h1>
      </footer>
    </div>
  );
}

export default App;

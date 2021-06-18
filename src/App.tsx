import React from 'react';
import Place from './Place';
import './App.css';
import LondonEye from './images/london-eye.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-border">My Favorite Places </h1>
      </header>
      <main className="main-content">
        <Place
          placeTitle={"London Eye"}
          
          placePicture={'placeholder for image'}
          placeName={"London"}
          placeCountry={"England"}
          placeWhy={"Even though i dont like heights, its a nice why to bond with the person you are with. Also it's nice to see the whole of London whilst youre on it!"}
          
         />
        <section>
          <div>
            <h3>Eveyrhting underneath this is just placeholder!</h3>
          </div>
         London Eye
         <div>
          <img className='london-eye' src={LondonEye} alt='London Eye' />
         </div>
        </section>
        <section>
         Effiel Tower
        </section>
        <section>
         Leaning Tower of Pisa
        </section>
        <section>
         Disney Land Florida
        </section>
      </main>
      <footer className="footer-content">
        <h1>Add Stuff Here</h1>
      </footer>
    </div>
  );
}

export default App;

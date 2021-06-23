import Places from './places.json';

// interface PlaceProps {
//   placeTitle: string;
//   placeName: string;
//   placeCountry: string;
//   placePicture: string;
//   placeWhy: string;
//   placeMap: string;
// }

function Place(): JSX.Element { 
console.log(Places[1].title)

  return (
    <div>
        {Places.map((place)=>(
            <div className="cardHolder" key={place.id}>
                <div className="placeTitle">
                <h3>{place.title}</h3>
                </div>
                <img
                className="placePicture"
                src={place.picture}
                alt="London Eye"
                />
                <div className="placeCityCountry">
                {place.name}, {place.country}
                <a href={place.map}>(Map link)</a>
                </div>
                <div className="placeWhy">{place.why}</div>
            </div>
        ))}
    </div>
    );
}


export default Place;

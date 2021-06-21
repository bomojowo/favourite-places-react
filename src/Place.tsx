interface PlaceProps {
  placeTitle: string;
  placeName: string;
  placeCountry: string;
  placePicture: string;
  placeWhy: string;
  placeMap: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <div>
      <div className="cardHolder">
        <div className="placeTitle">
          <h3>{props.placeTitle}</h3>
        </div>
        <img
          className="placePicture"
          src={props.placePicture}
          alt="London Eye"
        />
        <div className="placeCityCountry">
          {props.placeName}, {props.placeCountry}
          <a href={props.placeMap}>(Map link)</a>
        </div>
        <div className="placeWhy">{props.placeWhy}</div>
      </div>
    </div>
  );
}

export default Place;

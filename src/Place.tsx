//import { Url } from "url";

interface PlaceProps {
    placeTitle: string;
    placeName: string;
    placeCountry: string;
    placePicture: string;
    placeWhy: string;
}

function Place(props: PlaceProps): JSX.Element {
return(
    <div>
        <div className='cardHolder'>
            <div className='placeTitle'>
                {props.placeTitle}
            </div>
            <div className='placePicture'>
                {props.placePicture}
            </div>
            <div className='placeCityCountry'>
                {props.placeName}, {props.placeCountry}
            </div>
            <div className='placeWhy'>
                {props.placeWhy}
            </div>
        </div>
    </div>
)
}

export default Place;

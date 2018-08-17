import React from 'react';
import { compose, withProps} from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap,  Marker, InfoWindow } from "react-google-maps";

const SantoriniMap = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCbV4xfLv_0m7PW6Cd1p0YFavLaVuoEMOE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
  
  withScriptjs,
  withGoogleMap)
  ((props) => <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 36.393156, lng: 25.461509 }}
    >
        {props.places.map(place =>
        <Marker
        key={place.id}
        position={{lat:place.location.lat, lng: place.location.lng}}
        icon={props.selectedPlace === place.id && props.isOpen ? { url:'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Inside-Chartreuse-icon.png'} : { url: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Marker-Inside-Pink-icon.png' }}
        onClick={() => props.onToggleOpen(place.id)}
        >
            { props.selectedPlace === place.id && props.isOpen &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
                <div className='info-window'>
                    <h2>{place.name}</h2>

                    <p className='info-address'>
                        <span className='info-span'>Address: </span>
                        {`${place.location.formattedAddress[0]}, 
                            ${place.location.formattedAddress[1]}, 
                            ${place.location.formattedAddress[2]}
                        `}</p>

                    <p className='info-position'>
                        <span className='info-span'>Location: </span>
                        {`${place.location.lat}, 
                        ${place.location.lng}
                    `}</p>

                    <p className='info-postalCode'>
                        <span className='info-span'>PostalCode: </span>
                        {`${place.location.postalCode}                       
                    `}</p>
                    <a className='more-info' rel="more info" href={`https://www.google.com.eg/maps/?q=${place.name}`} target='_blank'>more</a>

                </div>
            </InfoWindow>}
        </Marker>
            )}

    </GoogleMap>
)

export default SantoriniMap
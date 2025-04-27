
import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

const [places, setPlaces] = useState(data);


const removePlace = (id) => {
  let newPlaces = places.filter(place => place.id !==id);
  setPlaces(newPlaces);
}

  return (
    <div> 
    <div className="header">
      <h1>{places.length > 0 ? "Places to visit in our trip to Ravena" : "Your plan has been completed !"} </h1> 
    </div>

    {places.map((element =>  {
      const {id, place, image} = element;

      return (
   
      <div key={id} className="container"> 
        <div  >
        <h2>Day {id}</h2>
        <h3>{place}</h3>
        <img src={image} width="300px" alt="city"/>
        <div className="container"> 
        <button className="btn" onClick= {() => removePlace(id)}>Complete</button>
      </div>
      </div>
      </div>
     
      
      )
    } ))}
   
    </div>
  )
}

export default App;

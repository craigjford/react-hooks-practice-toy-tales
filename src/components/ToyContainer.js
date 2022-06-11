import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateAppToy }) {

  const donateContainToy = (toy) => {
    console.log('in Toy Container - toy = ', toy)  
    donateAppToy(toy);
  } 

  const displayToys = toys.map((toy) => {   
      return (<ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} donateToy={donateContainToy} />)
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;

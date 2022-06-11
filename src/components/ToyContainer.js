import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy , updateLikes }) {

  const donateContainToy = (id) => { 
    donateToy(id);
  } 

  const updateContLikeCount = (id, updatedToy) => {
    updateLikes(id, updatedToy);
  }

  const displayToys = toys.map((toy) => {   
      return (<ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} deleteToy={donateContainToy} updateLikeCount={updateContLikeCount} />)
  })

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;

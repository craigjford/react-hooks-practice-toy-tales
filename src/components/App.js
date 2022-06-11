import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data))
  }, []);

  const handleClick = () => {
      setShowForm(!showForm)
  }

  const handleToyAdd = (newToy) => {
      setToys([...toys, newToy])
      setShowForm(false);
  }

  const deleteAppToy = (id) => {
      const filteredToys = toys.filter((toy) => toy.id !== id);
      setToys(filteredToys);
  }

  const updateLikesApp = (id, updatedToy) => {
      const newToyList = toys.map((toy) => {
          if(toy.id === id) {
              return updatedToy;
          } else {
              return toy;
          }
      })
      setToys(newToyList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onhandleSubmit={handleToyAdd} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={deleteAppToy} updateLikes={updateLikesApp}/>
    </>
  );
}

export default App;

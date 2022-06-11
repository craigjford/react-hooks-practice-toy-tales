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
      .then((data) => {
        console.log('data = ', data)
        setToys(data)
      })
  }, []);

  const handleClick = () => {
      setShowForm(!showForm)
  }

  const handleToyAdd = (newToy) => {
      setToys([...toys, newToy])
      console.log('in App add toy finished')
  }

  const donateAppToy = (newToy) => {
    console.log('in App Delete toy = ', newToy)
    console.log('in App add toy finished')
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onhandleSubmit={handleToyAdd} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={donateAppToy} />
    </>
  );
}

export default App;

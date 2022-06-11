import React, { useState } from "react";

function ToyForm({ onhandleSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const addToyAdd = (event) => {
      event.preventDefault();

      const newToy = {
        name: name,
        image: image,
        likes: 0
      }

      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {"Content-type": "application/json",
      },
        body: JSON.stringify(newToy),
      })  
        .then((res) => res.json())
        .then((data) => {
            onhandleSubmit(data)
      })

      setName("");
      setImage("");

  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addToyAdd}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

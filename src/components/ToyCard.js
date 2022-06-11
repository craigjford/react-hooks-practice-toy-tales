import React from "react";

function ToyCard({ id, name, image, likes, donateToy }) {

  const deleteToy = (id) => {

    console.log('in ToyCard id = ', id)

    fetch(`http://localhost:3001/toys/${id}`, {
        method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => donateToy(data));
}

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like</button>
      <button className="del-btn" onClick={() => deleteToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
   
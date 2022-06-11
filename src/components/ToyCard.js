import React from "react";

function ToyCard({ id, name, image, likes, deleteToy, updateLikeCount }) {

  const donateToy = (id) => {
   console.log('in ToyCard delete id = ', id)
   fetch(`http://localhost:3001/toys/${id}`, {       
     method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => console.log('in Toy Card = ', data));

    deleteToy(id)
  }

  const updateLikes = (id) => {
    // add fetch request
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          likes: likes + 1,
      }),
      })
        .then((r) => r.json())
        .then((updatedToy) => updateLikeCount(updatedToy.id, updatedToy
          ));
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
      <button className="like-btn" onClick={() => updateLikes(id)}>{likes} Likes</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
   
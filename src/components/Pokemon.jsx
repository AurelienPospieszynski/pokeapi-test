import React from "react";

const Pokemon = ({ id, name, image, type }) => {
  return (
    <div className="bg-amber-200">
      <div className="text-1xl">Id : {id}</div>
      <img src={image} alt={name} />
      <p className="text-2xl">{name}</p>
      <p className="text-1xl">Type : {type}</p>
    </div>
  );
};

export default Pokemon;

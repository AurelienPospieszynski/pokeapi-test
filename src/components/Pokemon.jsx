import React from "react";

const Pokemon = ({ id, name, image, type }) => {
  return (
    <div className="m-2 flex flex-col gap-3 rounded bg-slate-400 hover:bg-slate-600">
      <div className="text-1xl text-center"> #{id}</div>
      <img className="mx-auto h-24 w-24 items-center" src={image} alt={name} />
      <p className="text-center text-2xl">{name}</p>
      <p className="text-1xl text-center">Type : {type}</p>
    </div>
  );
};

export default Pokemon;

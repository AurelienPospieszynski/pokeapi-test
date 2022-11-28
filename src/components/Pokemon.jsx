import React from "react";
import clsx from "clsx";

const Pokemon = ({ id, name, image, type }) => {
  return (
    <div
      className={clsx(
        "m-2 flex flex-col",
        {
          "bg-red-600": type === "fire",
        },
        "gap-3 rounded bg-cyan-200"
      )}
    >
      <div className="text-1xl text-center"> #{id}</div>
      <img className="mx-auto h-24 w-24 items-center" src={image} alt={name} />
      <p className="text-center text-2xl">{name}</p>
      <p className="text-1xl text-center">Type : {type}</p>
    </div>
  );
};

export default Pokemon;

import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <div className="ing-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  );
}

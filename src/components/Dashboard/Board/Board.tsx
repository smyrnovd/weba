import React from "react";

export const Board = (props: any) => {
  return (
    <div className="card col-lg-3 m-3">
      <img src={props.card_img} className="card-img-top" alt="card image"></img>
      <div className="card-body">
        <h5 className="card-title">{props.board_name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Перейти в доску
        </a>
      </div>
    </div>
  );
};

import React from 'react';
import './PillarCard.scss';

function PillarCard(props) {
//   const baseClasses = "bg-white flex justify-center items-center"

return (
    <div className="card">
        <h4 className="title">{props.title}</h4>
        <img className="h-[70px] my-[27px] mx-auto" src={props.image} alt={props.alt}/>
        <p className="grey-text leading-[22px] w-[233px]">{props.text}</p>
    </div>
  );
}

export default PillarCard;

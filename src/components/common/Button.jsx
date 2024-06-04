import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

function Button(props) {
  const styling = props.styleType === 'filled' ? 'button-filled' : 'button-unfilled';
  const baseClasses = "paragraph rounded-full cursor-pointer"
  return (
    <Link to={props.link}>
        <button className={`${baseClasses} ${styling}`}>
        {props.text}
        </button>
    </Link>
  );
}

export default Button;

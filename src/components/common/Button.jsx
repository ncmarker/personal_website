import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

function Button(props) {
  const styling = props.styleType === 'filled' ? 'button-filled' : 'button-unfilled';
  const baseClasses = "paragraph rounded-full inline-flex items-center text-white"

  // Play Icon SVG
  const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-[20px] h-[20px] ml-[2px] fill-current play-icon">
      <path d="M7 6v12l10-6z"></path>
    </svg>
  );

  return (
    <Link to={props.link} className='cursor-pointer'>
        <button className={`${baseClasses} ${styling}`}>
        {props.text}
        {props.type === 'demo' && <PlayIcon />}
        </button>
    </Link>
  );
}

export default Button;

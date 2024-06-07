import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.scss';

function BackButton(props) {
  return (
    <Link to={props.link}>
        <button className="base-class mt-4 mb-8 md:my-16 flex items-center text-white hover:text-gray-300">
        <svg className="svg w-5 h-5 mr-[2px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>
        Back
        </button>
    </Link>
  );
}

export default BackButton;

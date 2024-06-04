import React, { useState } from 'react';

function ContactIcon(props) {
  const [currentImage, setCurrentImage] = useState(props.image);
  const hoverImage = props.image.replace('.png', '_hover.png'); // Adjust this if your naming convention is different

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div
        className="w-[43px] h-[43px] flex justify-center items-center"
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(props.image)}
      >
        <img className="w-[100%] h-[100%]" src={currentImage} alt={props.alt} />
      </div>
    </a>
  );
}

export default ContactIcon;

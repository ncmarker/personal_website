import React from 'react';
import './TextInput.scss'; // Ensure you have the correct path to your SCSS file

function TextInput(props) {
  const baseClasses = "bg-[#898693] border border-[2px] border-black rounded-[12px] px-[12px] py-[12px] input-placeholder";
  const sizeClass = props.size === 'short' ? 'w-[482px] max-h-[50px] resize-none' :
                    props.size === 'long' ? 'w-[1064px] min-h-[248px]' : '';  
  return (
    <textarea 
      type="text" 
      className={`${baseClasses} ${sizeClass}`} 
      placeholder={props.placeholder} 
    />
  );
}

export default TextInput;

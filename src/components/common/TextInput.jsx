import React from 'react';
import './TextInput.scss'; // Ensure you have the correct path to your SCSS file

function TextInput(props) {
  const baseClasses = "bg-[#ffffff50] border border-[2px] border-black rounded-[12px] px-[12px] py-[11px] input-placeholder";
  const sizeClass = props.size === 'short' ? 'w-full md:w-6/12 max-h-[50px] resize-none' :
                    props.size === 'long' ? 'w-full min-h-[248px]' : '';  
  return (
    <textarea 
      // type="text" 
      className={`${baseClasses} ${sizeClass}`} 
      placeholder={props.placeholder} 

      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextInput;

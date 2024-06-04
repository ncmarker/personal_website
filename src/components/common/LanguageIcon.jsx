import React from 'react';

function LangIcon(props) {
  const baseClasses = "bg-white flex justify-center items-center"
  const sizeClass = props.size === 'small' ? 'w-[35px] h-[35px] rounded-[5px]' :
                    props.size === 'medium' ? 'w-[48px] h-[48px] rounded-[7px]' :
                    props.size === 'large' ? 'w-[80px] h-[80px] rounded-[12px]' : '';  
return (
    <div className={`${baseClasses} ${sizeClass}`}>
        <img className="max-w-[80%] max-h-[80%] object-contain" src={props.image} alt={props.alt}/>
    </div>
  );
}

export default LangIcon;

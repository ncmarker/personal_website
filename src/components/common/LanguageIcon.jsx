import React from 'react';

function LangIcon(props) {
  const baseClasses = "bg-white flex justify-center items-center mx-[5px] my-[5px]"
  const sizeClass = props.size === 'small' ? 'w-[35px] h-[35px] rounded-[5px]' :
                    props.size === 'medium' ? 'w-[48px] h-[48px] rounded-[7px]' :
                    props.size === 'large' ? 'w-[80px] h-[80px] rounded-[12px]' : '';  
  const languageImage = props.language === 'python' ? '/images/icons/python_icon.png' :
                    props.language === 'cpp' ? '/images/icons/cpp_icon.png' :
                    props.language === 'flask' ? '/images/icons/flask_icon.png' :
                    props.language === 'php' ? '/images/icons/php_icon.png' :
                    props.language === 'react' ? '/images/icons/react_icon.png' :
                    props.language === 'html' ? '/images/icons/html_icon.png' :
                    props.language === 'js' ? '/images/icons/js_icon.png' :
                    props.language === 'css' ? '/images/icons/css_icon.png' :
                    props.language === 'mysql' ? '/images/icons/mysql_icon.png' :
                    props.language === 'scss' ? '/images/icons/scss_icon.png' :
                    props.language === 'sklearn' ? '/images/icons/sklearn_icon.png' :
                    props.language === 'tailwind' ? '/images/icons/tailwind_icon.png' :
                    props.language === 'snap' ? '/images/icons/snap_icon.png' :
                    props.language === 'bun' ? '/images/icons/bun_icon.png' :
                    '';
const languageAlt = props.language === 'python' ? 'Python Icon' :
                  props.language === 'cpp' ? 'C++ Icon' :
                  props.language === 'flask' ? 'Flask Icon' :
                  props.language === 'php' ? 'PHP Icon' :
                  props.language === 'react' ? 'React Icon' :
                  props.language === 'html' ? 'HTML Icon' :
                  props.language === 'js' ? 'JavaScript Icon' :
                  props.language === 'css' ? 'CSS Icon' :
                  props.language === 'mysql' ? 'MySQL Icon' :
                  props.language === 'scss' ? 'SCSS Icon' :
                  props.language === 'sklearn' ? 'Scikit-learn Icon' :
                  props.language === 'tailwind' ? 'Tailwind Icon' :
                  props.language === 'snap' ? 'Snap Icon' :
                  props.language === 'bun' ? 'Bun Icon' :
                  '';
                        
return (
    <div className={`${baseClasses} ${sizeClass}`}>
        <img className="max-w-[80%] max-h-[80%] object-contain" src={languageImage} alt={languageAlt}/>
    </div>
  );
}

export default LangIcon;

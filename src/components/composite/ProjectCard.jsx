import React from 'react';
import './ProjectCard.scss';

import Button from '../common/Button.jsx';
import LangIcon from '../common/LanguageIcon.jsx';


function ProjectCard(props) {

return (
  <div className="project-card flex flex-col md:flex-row">
    <img className="project-image mr-0 md:mr-[34px] mb-4 md:mb-0" src={props.image} alt={props.alt} />
    <div className="project-info flex flex-col justify-between">
      <div>
        <h5 className="title mb-[8px]">{props.title}</h5>
        <p className="subtitle-regular mb-[25px]">{props.description}</p>
        <p className="grey-text">{props.date}</p>
        <div className="flex flex-wrap gap-[20px] my-[5px]">
          {props.languages.map((language, index) => (
            <LangIcon key={index} language={language} size="small" />
          ))}
        </div>
      </div>
      <div className="project-buttons flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="first-buttons flex gap-2 mb-4 md:mb-0">
          <Button styleType="unfilled" text="GitHub" link={props.github} />
          <Button styleType="unfilled" type="demo" text="Play Demo" link={props.demo} />
        </div>
        <Button styleType="filled" text="See Details" link={props.details} />
      </div>
    </div>
  </div>
  );
}

export default ProjectCard;

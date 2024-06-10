import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Desy() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "DESY");

  if (!project) {
    return <div>Project not found</div>;
  }

  const sections = [
    { id: 'backstory', title: 'Backstory' },
    { id: 'features', title: 'Features' },
    { id: 'build', title: 'Build' },
    { id: 'system-design', title: 'System Design' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'future-steps', title: 'Future Steps' },
  ];

  return (
    <div className="w-[95%] md:w-10/12 mx-auto">
        <BackButton link="/"/>
        <section id="heading" className="flex flex-col-reverse justify-between items-center gap-8 md:mb-40 md:items-start md:flex-row">
            <div>
                <h1 className="heading mb-4">{project.title}</h1>
                <p className="subtitle-regular mb-12">{project.description}</p>
                <p className="grey-text mb-4">{project.date}</p>
                <p className="grey-text mb-8"><span className="bold-grey-text">Role: </span>{project.role}</p>
                <div className="flex gap-4 mb-12 flex-col md:flex-row">
                    <Button styleType="filled" text="GitHub" link={project.github} />
                    <Button styleType="unfilled" type="demo" text="Play Demo" link={project.demo} />
                </div>
                <div className="flex flex-wrap gap-[20px] my-[5px]">
                    {project.languages.map((language, index) => (
                        <LangIcon key={index} language={language} size="medium" />
                    ))}
                </div>
            </div>
            <img className="w-4/6 mb-4 md:mb-12 md:w-[37%]" src={`${process.env.PUBLIC_URL}${project.mockup}`} alt="Pixel Mockup"/>
        </section>

        <div className="flex flex-row gap-12 justify-between">
          <div className="hidden md:block">
            <TableOfContents sections={sections}/>
          </div>
          <div className="flex flex-col gap-48 w-full mt-24 md:mt-0 md:w-9/12">

            <section id="backstory" className="flex flex-col">
              <h1 className="heading mb-16">Backstory</h1>
              <p className="grey-text">As members of USC&apos;s premier startup community, <span className="bold-gradient-text">Sigma Eta Pi</span>, our 
                team of three—comprising one developer, a designer, and a product manager—founded DESY. Drawing from our collective experiences 
                in internships and projects, we recognized the challenges of effectively implementing and maintaining a design system for both 
                designers and developers.<br/><br/>
                Currently, many large companies have entire design system teams that work on improving and organizing the 
                brand&apos;s design system. Smaller companies often create a design system for branding purposes, but struggle to 
                maintain consistent implementation and upkeep across all designs and builds during the design to engineer handoff 
                process.<br/><br/>
                Recognizing this market gap, <span className="bold-gradient-text">we quickly received validation</span> for our idea 
                and developed DESY. DESY serves as your ultimate design system compliance checker, ensuring all aspects of your 
                design align with your set design system. This allows for easy style sheet exports for developers, creating a single 
                file with all design system presets that can then be monitored and updated over time. DESY also provides suggestions 
                to help you expand and grow your design system over time. DESY is your designer&apos;s best friend, alleviating the 
                frustration of manually ensuring all elements comply with your company&apos;s design system. Check us out on the 
                Figma Plugin Store!</p>
            </section>

            <section id="features" className="flex flex-col">
              <h1 className="heading mb-16">Features</h1>
              <div className="flex flex-col gap-16">
                {project.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-16 mb-8 md:mb-0 md:flex-row">
                  <img className="w-full object-contain md:w-[45%]" src={`${process.env.PUBLIC_URL}${feature.image}`} alt={feature.title} />
                  <div className="flex flex-col gap-4">
                    <h3 className="subtitle-bold">{feature.title}</h3>
                    <p className="grey-text">{feature.description}</p>
                  </div>
                </div>
                ))}
              </div>
            </section>

            <section id="build" className="flex flex-col">
              <h1 className="heading mb-16">Build</h1>
                <p className="grey-text">DESY is developed as a <span className="bold-gradient-text">Figma plugin</span>, with the 
                frontend crafted using pure HTML and CSS, while the backend functionality is implemented with JavaScript.<br/><br/>
                Users are automatically authenticated through their Figma accounts, as DESY requires an active Figma session to 
                operate. This authentication grants DESY full access to the currently open file, including all elements, styles, 
                pages, and frames. When the user clicks <span className="bold-gradient-text">“Scan File”</span>, DESY identifies 
                all frames within the current page and iterates over each element, excluding images, to compare their styles 
                against the saved style presets in Figma. Elements that do not comply with the saved styles are flagged as 
                non-compliant and presented to the user, while saving the element IDs on the backend to obtain element location 
                within the file.<br/><br/>
                Non-compliant elements receive <span className="bold-gradient-text">suggestions</span> based on numerical analysis. 
                The font or color style that is numerically closest to the non-compliant element is recommended as the replacement. 
                Additionally, if a non-compliant style is repeated at least three times, DESY suggests adding this style to the 
                design system or applying a similar existing style.<br/><br/>
                DESY also generates <span className="bold-gradient-text">exportable CSS</span> by iterating over each saved style 
                preset in the design system and converting them to CSS code using styling information from Figma Dev Mode. Only 
                relevant attributes are included, and the class names match the saved style presets to ensure a seamless handoff 
                from the design team to developers.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The most difficult aspect of this project was finding the balance between checking every 
                    detail for design system compliance and only checking for obvious differences. We build DESY up to a point of 
                    medium specificity, and are continuously talking with users about future improvements.<br/><br/>
                    Another main challenge was how to effectively present our information to the user in the UI. Currently, 
                    DESY takes up about a fifth of the overall window size, giving us only a small region to work within. We 
                    organized each element by frame, so that a designer could move frame-by-frame while designing without having 
                    to scroll through and entire list of errors.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">In the future we hope to convert from a CSS export to a SCSS export with variables, 
                    providing a more consolidated stylesheet for developers to maintain. We also hope to improve our suggestions 
                    feature, incorporating AI to provide suggested design systems as a whole based on a given description, 
                    assisting new designers in establishing branding. We also plan to expand past a Figma plugin, to our own 
                    platform that handles all design system manipulations, components, and compliance checks in order to facilitate 
                    the design to developer handoff process.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Desy;

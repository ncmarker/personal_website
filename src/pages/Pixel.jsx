import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Pixel() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Pixel");

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
    <div className="w-10/12 mx-auto">
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
            <img className="w-4/6 mb-4 md:mb-12 md:w-[37%]" src={project.mockup} alt="Pixel Mockup"/>
        </section>

        <div className="flex flex-row gap-12 justify-between">
          <div className="hidden md:block">
            <TableOfContents sections={sections}/>
          </div>
          <div className="flex flex-col gap-48 w-full mt-24 md:mt-0 md:w-9/12">

            <section id="backstory" className="flex flex-col">
              <h1 className="heading mb-16">Backstory</h1>
              <p className="grey-text">As members of USC's premier startup incubator, <span className="bold-gradient-text">LavaLab</span>, 
                our team of four—comprising two developers, a designer, and a product manager—founded Pixel. Drawing from our collective 
                experiences in internships and projects, we recognized the challenges of aligning final builds with initial designs and set 
                out to create a solution.<br/><br/>
                Currently, the standard process involves extensive Zoom meetings to discuss the designer's specific comments and 
                callouts. While some larger companies have developed internal tools to aid in front-end quality assurance, 
                smaller companies and startups often lack the resources to prioritize such tools.<br/><br/>
                Recognizing this market gap, <span className="bold-gradient-text">we quickly received validation</span> for our idea. Pixel serves as an all-in-one front-end 
                quality assurance specialist, dedicated to ensuring that the designer&apos;s vision is accurately implemented in code. 
                It is not uncommon for details like margins, border-radius, and specific hex codes to get lost in translation. 
                Pixel acts as the final checkpoint before a product is launched, guaranteeing that these elements are preserved.</p>
            </section>

            <section id="features" className="flex flex-col">
              <h1 className="heading mb-16">Features</h1>
              <div className="flex flex-col gap-16">
                {project.features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-16 mb-8 md:mb-0 md:flex-row">
                  <img className="w-full object-contain md:w-[45%]" src={feature.image} alt={feature.title} />
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
                <p className="grey-text">The front end of Pixel is developed using <span className="bold-gradient-text">React.js</span>, 
                  leveraging <span className="bold-gradient-text">SCSS</span> to establish a sustainable design system. On the 
                  backend, <span className="bold-gradient-text">Flask</span> serves as the foundation, utilizing API endpoints to 
                  facilitate the necessary functionalities.<br/><br/>
                  The process begins with the user authenticating their Figma account, enabling Pixel to access all files within 
                  their design portfolio. Users then input a link to a specific Figma file and the corresponding deployed URL they 
                  wish to evaluate. Pixel utilizes the <span className="bold-gradient-text">Figma API</span> to extract data from 
                  all pages and frames within the designated Figma file. Concurrently, <span className="bold-gradient-text">Selenium</span> is 
                  employed to initiate a headless browser session of the deployed site, capturing all linked (anchor tag) URLs originating 
                  from the main page. Users can then select the particular Figma page and frame, alongside the specific deployed URL, for 
                  comparison.<br/><br/>
                  Upon initiating the "Run Pixel" command, Pixel temporarily stores an image of the selected Figma frame and a 
                  full-page screenshot of the deployed URL. Both images are processed through the <span className="bold-gradient-text">OpenAI GPT Vision API</span>, 
                  which is prompted to identify any design discrepancies, providing detailed descriptions of elements contributing to these 
                  discrepancies. These descriptions are then fed into <span className="bold-gradient-text">AskUI</span>, a Node.js package, 
                  which selects elements on the page based on their semantic descriptions.<br/><br/>
                  This method identifies all problematic elements from the Selenium-hosted site, returning their coordinates on the 
                  page. Using these coordinates, the deployed site image is annotated to highlight discrepancies. These coordinates 
                  further enable Pixel to pinpoint the exact DOM element (using <span className="bold-gradient-text">getElementByPoint(x, y)</span>), 
                  extract the HTML (using <span className="bold-gradient-text">elt.outerHTML</span>), and capture the CSS styling 
                  (using <span className="bold-gradient-text">elt.getComputedStyle()</span>) of the problematic elements.<br/><br/>
                  The result is a comprehensive list of discrepancies, each accompanied by a visual marker, a detailed description, 
                  and relevant code snippets, providing a thorough comparison between the original design and the deployed 
                  product.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={project.systemDesign} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The most difficult aspect of this project was obtaining a high level of accuracy on the 
                screen comparison. Currently ChatGPT Vision is being used, but this is only a temporary solution that allowed us 
                to build fast and get launched to users. Most modern AI chat bots are trained on physical images as opposed to UI 
                screens, so this is something we are currently working to improve.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">Aside from working to improve the accuracy of the comparison, we are currently working on 
                implementing Pixel as part of CI. This means that each time a developer pushes code to GitHub, Pixel would run and 
                provide an analysis of the code compared to the Figma design. This would allow for constant assurance that the 
                frontend is in alignment with the provided Figma design, avoiding the long and tedious Zoom calls with product 
                teams prior to launch.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Pixel;

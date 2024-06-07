import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Snap() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Snap Lens");

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
              <p className="grey-text">As part of a <span className="bold-gradient-text">Virtual Reality externship with Snap Inc.</span>, I 
                participated in an intensive project designed to immerse us in the fundamentals of Lens Studio. Over the initial weeks, we 
                were introduced to the basics of the software, experimenting with creating a few basic lenses. This hands-on experience laid 
                the groundwork for the final phase of the project, where we were tasked with developing our own unique lens aligned with Snap 
                Inc.'s theme of uniting individuals through sports.<br/><br/>
                For my project, I created a <span className="bold-gradient-text">Jumbotron Snap Lens</span>. The Jumbotron, a 
                universal symbol of excitement and unity at sports events, served as the inspiration for my lens. This Snap Lens 
                allows users to feel as if they are featured on the Jumbotron at their favorite sports game, capturing the thrill 
                and communal spirit of live events.<br/><br/>
                Throughout the project, we received guidance and support from Snap mentors and participated in workshops led by 
                Snap Lens Studio professionals. These sessions were invaluable in enhancing our technical skills and understanding 
                of the platform, ensuring we could build high-quality lenses within Snap&apos;s software.</p>
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
                <p className="grey-text">The development of the Jumbotron Snap Lens involved a series of methodical steps 
                    within <span className="bold-gradient-text">Snap Lens Studio</span>, leveraging its powerful tools and 
                    templates. To start, I utilized the face mask template provided by Lens Studio, which served as the foundation 
                    for creating an engaging and interactive experience.<br/><br/>
                    The primary feature of my lens was an overlay image simulating a Jumbotron screen. To achieve this, I added 
                    an image to the orthographic camera, ensuring it remained fixed in position relative to the user's face. This 
                    setup was crucial for maintaining the illusion of the user being featured on a Jumbotron, regardless of their 
                    movements.<br/><br/>
                    Next, I focused on the visual appeal and functionality of the lens by adjusting 
                    the <span className="bold-gradient-text">sizing parameters</span>. By expanding the dimensions, I ensured the 
                    lens provided a wider field of view, enhancing the immersive experience for users. This adjustment required 
                    precise scaling and positioning to maintain the visual integrity and seamless integration of the Jumbotron 
                    effect.<br/><br/>
                    Throughout the build process, I employed various features of Lens Studio, including layer management 
                    and <span className="bold-gradient-text">object hierarchy</span>, to organize elements efficiently. This 
                    organization was essential for maintaining clarity and ease of adjustments during development. I also 
                    experimented with scripting capabilities to fine-tune interactions and animations, adding dynamic elements that 
                    responded to user input.<br/><br/>
                    Furthermore, workshops with Snap Lens Studio professionals were instrumental in refining my approach. These 
                    sessions provided insights into advanced techniques and best practices, allowing me to enhance the lens's 
                    performance and user engagement.<br/><br/>
                    By integrating these technical aspects, I successfully created a Jumbotron Snap Lens that captures the 
                    excitement of live sports events, offering users a unique and thrilling experience.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={project.systemDesign} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The most challenging aspect of this project was becoming accustomed to Snap Lens Studio 
                    with such little time. While we were given the opportunity to experiment with the software and attend mentor 
                    meetings, I was completely new to the program and thus spent lots of time watching youtube videos to learn 
                    basic skills. I hope to continue exploring with Snap Lens Studio to create more immersive experiences in the 
                    future.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">Aside from expanding my capabilities in Snap Lens Studio, I hope to add more customizable 
                    features to the Jumbotron Lens. I want to add buttons along the bottom of the lens that only are visible while 
                    the user is using the lens, allowing the user to select from a variety of different Jumbotron images. This 
                    variety will provide a more versatile experience for the user, while also incorporating different stadium 
                    environments and different teams.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Snap;

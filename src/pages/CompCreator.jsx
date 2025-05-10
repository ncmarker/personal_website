import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function CompCreator() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "CompCreator");

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
              <p className="grey-text">
                Component Creator began as my capstone project for an "Advanced Front-End" course at university. The project started 
                with a straightforward goal: to demonstrate my <span className="bold-gradient-text">advanced understanding of React and modern front-end principles</span>. 
                But as I worked on it, I realized its potential to become more than just a class project—it could be a tool to 
                help others. I've always been drawn to building tools that make development easier and more intuitive, especially 
                for those just starting out.<br/><br/>

                With Component Creator, I set out to create a platform where developers, particularly beginners, could quickly and 
                easily build reusable UI components without needing extensive coding experience. Reusable components are the 
                backbone of scalable and maintainable React applications, but they can feel intimidating to newcomers. My goal was to 
                simplify this process, <span className="bold-gradient-text">offering users a way to learn and adopt best practices 
                while exploring their creativity</span>.<br/><br/>

                This project reflects my passion for bridging the gap between technical concepts and approachable design, making 
                complex ideas more accessible through intuitive tools.
                </p>
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
                <p className="grey-text">
                    Component Creator's front end was crafted using <span className="bold-gradient-text">React</span>, with 
                    <span className="bold-gradient-text">Tailwind CSS</span> for a streamlined and efficient design system. 
                    The platform employs <span className="bold-gradient-text">React Router</span> to manage the navigation between pages, 
                    creating a seamless and intuitive user experience.<br/><br/>

                    The backend interactions are simulated using a <span className="bold-gradient-text">JSON database library</span>, which provides mock database functionality 
                    for storing user data, components, and inspiration images. I implemented full <span className="bold-gradient-text">CRUD (Create, Read, Update, Delete)</span> 
                    functionality, enabling users to manage every aspect of their components and saved inspiration.<br/><br/>

                    To enhance the user experience, <span className="bold-gradient-text">Toastify</span> was integrated for real-time notifications, ensuring users receive 
                    feedback for every action they perform, such as saving a component or updating an inspiration image. Authentication 
                    is built in with hashed passwords to ensure secure login and data integrity.<br/><br/>

                    One of the standout features is the <span className="bold-gradient-text">interactive live render</span>, allowing users to see their components evolve in real 
                    time as they customize them. This dynamic nature required extensive testing and optimization to ensure that every 
                    interaction—whether it follows the “happy path” or not—functions without errors.<br/><br/>

                    The inspiration pages leverage the <span className="bold-gradient-text">Unsplash API</span> to fetch high-quality images, while real-time updates ensure that 
                    all user-related data remains consistent.
                  </p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The toughest part of this project was figuring out how much control to give users 
                    when building components. I wanted to make the platform flexible enough for experienced developers to 
                    use, while still being simple enough for beginners to understand. Designing an intuitive UI was crucial 
                    to strike that balance.<br/><br/>

                    The most complex part was getting the dynamic form, live code rendering, and live component 
                    rendering to work together seamlessly. I had to ensure each aspect updated in real-time as users 
                    interacted with the form, while also saving their progress and handling edge cases (like unexpected 
                    user input) without the program crashing. This resulted in multiple test cases being built and ran, 
                    and refinements made to ensure the successful execution of each.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">In the future, I'd love to expand the types of components users can create and 
                    provide more customization options. This would keep the platform accessible to beginners while offering 
                    more advanced tools for experienced developers.<br/><br/>

                    For the inspiration pages, I'd like to add grouping categories, link saved images to specific 
                    component types, and integrate other APIs to expand the variety of results. Adding an AI feature to 
                    suggest inspiration based on a quick description could also take the platform to the next level.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default CompCreator;

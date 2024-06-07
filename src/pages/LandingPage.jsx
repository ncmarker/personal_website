import React from 'react';

import ProjectCard from '../components/composite/ProjectCard.jsx';
import PillarCard from '../components/composite/PillarCard.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import ContactCard from '../components/composite/ContactCard.jsx';
import ContactIcon from '../components/common/ContactIcon.jsx';

import projectsData from '../data/projectData.js';


function LandingPage() {
  return (
    <div className="w-10/12 mx-auto">

        <section className="flex flex-col-reverse justify-between items-center mt-16 gap-8 md:flex-row md:mt-[160px]">
          <div className="w-11/12 md:w-5/12">
            <p className="bold-grey-text">&#128075; Hi there, I am</p>
            <h1 className="heading my-[7px] md:my-[15px]">Nick Marker</h1>
            <p className="bold-grey-text">I am a <span className="bold-gradient-text">Software Engineer</span> interested in the intersection of Design, Development, and Artificial Intelligence.</p>
          </div>
          <img className="w-5/6 mb-12 md:flex md:w-5/12" src="/images/landing/landing_hero.png" alt="Hero Animation"/>
        </section>

        <section id="projects" className="page-section">
          <h1 className="heading mb-[45px] md:mb-[85px]">Projects</h1>
          <div className="flex flex-col gap-12">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                alt={project.alt}
                title={project.title}
                description={project.description}
                date={project.date}
                languages={project.languages}
                github={project.github}
                demo={project.demo}
                details={project.details}
              />
            ))}
          </div>
        </section>

        <section id="about" className="page-section">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="md:w-2/5 w-full">
              <img className="w-full h-auto" src="/images/landing/landing_about.png" alt="headshot"/>
            </div>
            <div className="md:w-3/5 w-full flex flex-col gap-8">
              <h1 className="heading mb-[25px]">About</h1>
              <p className="grey-text">Hey there! I am a fourth-year <span className="bold-gradient-text">Computer Science and Game Development</span> student at  
                <span className="bold-gradient-text"> USC</span>, with a minor in Web Development. My focus on Software Engineering is driven by a strong 
                analytical mindset and desire to dive deep into the complexities of developing robust and efficient solutions.<br/><br/>
                I am also a creative at heart, working with UX design in the past, and continuing this journey as a <span className="bold-gradient-text">young 
                entrepreneur</span>. I love immersing myself into the startup space at the intersection of both design and development, 
                taking products all the way from ideation and design to the programming and launching.<br/><br/>
                Outside of professional endeavors you will find me hitting the gym, rock climbing, or going for a nearby hike. 
                I also love to wrap up the night with my boyfriend watching a classic horror movie or a funny episode of South Park.<br/><br/>
                I am actively seeking new opportunities that will allow me to grow as a Software Engineer, all while enjoying every 
                step of the way.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 my-[50px] md:flex-row md:flex-wrap md:justify-between md:my-[150px]">
            <div className="flex justify-center md:w-auto">
              <PillarCard title="Development" image="/images/icons/dev_icon.png" alt="dev icon" text="Software Engineer with full-stack experience in building digital platforms, while incorporating the power of AI."/>
            </div>
            <div className="flex justify-center md:w-auto">
              <PillarCard title="Innovation" image="/images/icons/innovation_icon.png" alt="innovation icon" text="Entrepreneur who has completed multiple startup incubators, building and pitching products from the ground up."/>
            </div>
            <div className="flex justify-center md:w-auto">
              <PillarCard title="Design" image="/images/icons/design_icon.png" alt="design icon" text="Prior experience in UX Design and Research, allowing me to have exposure to the full product lifecycle."/>
            </div>
          </div>
            <h5 className="title mb-[20px]">Languages & Frameworks</h5>
            <div className="flex flex-wrap justify-between flex-row">
            {['js', 'css', 'html', 'python', 'flask', 'tailwind', 'cpp', 'react', 'php', 'scss', 'sklearn', 'mysql'].map((language, index) => (
              <LangIcon
                key={index}
                size='large'
                language={language}
              />
            ))}
            </div>
        </section>

        <section id="contact" className="page-section">
          <div className="flex flex-row justify-between gap-4 md:gap-12 flex-wrap items-baseline">
            <h1 className="heading mb-[25px] md:mb-[85px]">Contact</h1>
            <div className="flex flex-row gap-12 flex-wrap mb-[25px] md:mb-0">
              <ContactIcon image="/images/icons/resume_icon.png" alt="Resume icon" link="https://drive.google.com/file/d/1tDPzm3_wVw4KKb7MEEf4AKZTPhrd8O2k/view"/>
              <ContactIcon image="/images/icons/linkedin_icon.png" alt="LinkedIn icon" link="https://www.linkedin.com/in/nickmarker"/>
              <ContactIcon image="/images/icons/github_icon.png" alt="GitHub icon" link="https://www.github.com"/>
              <ContactIcon image="/images/icons/phone_icon.png" alt="Phone icon" link="tel:+14843653437"/>
            </div>
          </div>
          <ContactCard/>
        </section>


    </div>
  );
}

export default LandingPage;

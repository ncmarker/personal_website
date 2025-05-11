import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function GalaxyHunters() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Galaxy Hunters");

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
                Galaxy Hunters is a <span className="bold-gradient-text">two-player bullet hell game</span> that challenges players to survive waves of alien robots in an attempt 
                to save the world. Developed collaboratively over the course of a semester, the game is set in a dystopian universe 
                where players must fight their way through enemies and defeat three progressively difficult bosses to win. The project 
                was built using Unity and C# and involved <span className="bold-gradient-text">multiple development cycles</span>, incorporating player feedback and gameplay metrics 
                to refine mechanics and user experience. I <span className="bold-gradient-text">partnered with a classmate</span> who contributed to engineering and led the creation 
                of original sprite artwork, while I handled the majority of the programming, animations, and systems design. Additional 
                art assets were generated using AI and animated manually. Through this project, I gained experience with <span className="bold-gradient-text">Perforce</span> version 
                control, which differed from my prior Git-based workflows, and deepened my understanding of real-time, 
                event-driven game logic.
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
                    Galaxy Hunters was developed in <span className="bold-gradient-text">Unity</span> using <span className="bold-gradient-text">C#</span> and structured with a focus on scalability and maintainability. We 
                    implemented a modular and <span className="bold-gradient-text">object-oriented architecture</span>, starting with core inheritance hierarchies—such as a base 
                    Weapon class and an Enemy superclass—which allowed us to reuse behavior across multiple types while extending unique 
                    attributes per subclass. Each weapon type implements its own fire patterns, cooldown mechanics, and animations, while 
                    enemies inherit base AI movement and health systems, overriding specific behaviors like dash attacks or teleportation.<br/><br/>

                    The player classes encapsulate input handling, character stats, and cooperative abilities, supporting simultaneous 
                    keyboard control via WASD and Arrow Keys. We utilized <span className="bold-gradient-text">Unity's Tilemap system</span> 
                    to design customizable background maps, making level design both visual and extensible. A global <span className="bold-gradient-text">GameManager</span> 
                    and <span className="bold-gradient-text">SoundManager</span>, implemented as <span className="bold-gradient-text">singletons</span>, 
                    manage game state transitions, sound cues, UI updates, and scene persistence across levels. This approach ensured 
                    clean separation of concerns and minimized inter-scene reinitialization bugs.<br/><br/>

                    Physics interactions were carefully configured using Unity's physics layers, collision matrices, and custom trigger logic. 
                    We balanced performance with fidelity by tagging interactable objects and setting precise rules for <span className="bold-gradient-text">collision 
                    handling</span>—ensuring that projectiles, power-ups, and environmental hazards responded appropriately without overwhelming 
                    the physics engine. Specific weapons use raycasting to calculate beam trajectories, while area-of-effect attacks rely 
                    on overlap sphere checks for efficient multi-hit detection. Input events were also abstracted to allow for future 
                    scalability, such as controller support or touch inputs.
                  </p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">Despite its smooth progression, Galaxy Hunters presented several technical hurdles. One 
                    major challenge was managing Unity's physics system at scale. With numerous on-screen entities—including bullets, 
                    enemies, power-ups, and effects—it became essential to differentiate between physical collisions and trigger-based 
                    events. We resolved this by mapping out all systems and assigning each to a physics layer, which allowed us to 
                    fine-tune Unity's collision matrix and prevent unwanted interactions.<br/><br/>

                    We also encountered occasional scene lag during specific scenarios, especially when transitioning between game 
                    states. After reviewing our pause logic, we discovered some objects continued running in the background despite 
                    the UI signaling otherwise. This was addressed by centralizing pause state control in the GameManager, 
                    ensuring all child objects respected game flow transitions. These improvements contributed to smoother 
                    performance and more predictable gameplay loops.
                </p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">With a fully functional base level, five unique weapons, over four enemy types, three 
                    challenging bosses, and two distinct characters, the foundation of Galaxy Hunters is solid. Our next steps 
                    involve expanding each of these dimensions: introducing new characters with distinct playstyles, adding 
                    advanced weapons with combo potentials, and designing additional levels that explore new enemy types and 
                    environmental challenges. This would deepen the narrative and provide longer, more immersive sessions.<br/><br/>

                    Thanks to our modular codebase, scaling up the game will require minimal structural changes. Most 
                    limitations during development were due to time constraints rather than technical blockers. With more 
                    time, we plan to implement skill trees, save systems, procedurally generated levels, and online multiplayer 
                    capabilities. Eventually, I hope to publish the game on platforms like itch.io to reach a wider audience and 
                    gather broader feedback. Galaxy Hunters has been one of the most rewarding and technically enriching 
                    projects I've worked on, blending creative gameplay design with scalable engineering systems.
                </p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default GalaxyHunters;

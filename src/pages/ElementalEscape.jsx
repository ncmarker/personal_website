import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function ElementalEscape() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Elemental Escape");

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
                Elemental Escape started as my final project for a <span className="bold-gradient-text">Mobile Game Development</span> university course, but it quickly became 
                an opportunity to dive deeper into game development. This was my first time building a game entirely from scratch 
                using Unity and C#, handling everything from gathering free assets and creating animations to designing levels and 
                writing gameplay scripts.<br/><br/>

                The game is a <span className="bold-gradient-text">2D single-player platformer</span> designed for mobile but also playable on PC with a keyboard. Players navigate 
                through 10 levels of increasing difficulty, using the elemental powers of fire, air, water, and earth to reach the 
                silver door at the end of each stage. Each element introduces a unique mechanic—fire shoots fireballs, air provides 
                a boosted jump, water enables teleportation through puddles, and earth raises platforms. Since potions that grant 
                these powers can only be used once per level, players must think strategically about when and how to use them.<br/><br/>

                This game highlights my <span className="bold-gradient-text">ability to not only develop software and user-focused applications, but also my ability 
                to program immersive games</span>. 
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
                    I built Elemental Escape in <span className="bold-gradient-text">Unity</span>, designing the levels dynamically using a <span className="bold-gradient-text">free tilemap system</span>. This allowed for 
                    seamless level transitions and real-time environmental changes, such as when the earth ability raises terrain mid-game. 
                    Since tilemaps support efficient rendering and collision detection, they provided a solid foundation for building 
                    interactive and adaptable maps without performance issues.<br/><br/>

                    For character controls and physics, I implemented Unity's <span className="bold-gradient-text">Rigidbody2D</span> and <span className="bold-gradient-text">BoxCollider2D</span> components to create smooth, 
                    responsive movement for both mobile and PC inputs. Since each elemental ability alters movement in a unique way—such 
                    as water teleporting through puddles or air providing an extra jump boost—I developed separate scripts for each power. 
                    These scripts were modular, allowing abilities to be dynamically assigned or removed as the player picked up potions 
                    throughout a level.<br/><br/>

                    To manage gameplay interactions efficiently, I used Unity's event system, which allowed objects like doors, 
                    destructible barriers, and elemental power-ups to react to player actions without unnecessary polling. Each 
                    interactive object had a dedicated script—e.g. destructible boxes listened for fireball collisions before 
                    breaking apart, etc.<br/><br/>

                    UI elements were built from scratch using <span className="bold-gradient-text">Figma</span> and <span className="bold-gradient-text">Unity's Canvas system</span>, ensuring a responsive design across 
                    various screen sizes. I anchored UI components properly so that mobile players could interact with on-screen 
                    controls, while PC players could use the keyboard without layout distortions. Animations were handled through 
                    Unity's <span className="bold-gradient-text">Animator Controller</span>, where I used sprite-based transitions to enhance movement feedback and elemental power 
                    activations.<br/><br/>

                    Audio feedback was integrated using <span className="bold-gradient-text">Unity's AudioSource system</span>, providing immersive sound effects for power usage, 
                    movement, and environmental interactions.<br/><br/>

                    Finally, I ensured the game could be exported to mobile devices without compatibility issues. This involved 
                    adjusting aspect ratios, implementing touch controls, and ensuring the game ran smoothly across different device 
                    resolutions.
                  </p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">One of the biggest challenges was working with Unity's tilemap system for the first time, 
                    especially when implementing real-time map alterations like the earth ability raising terrain. I had to account 
                    for edge cases, such as partial collisions, mid-air transformations, and ensuring the player couldn't clip 
                    through or get stuck inside modified terrain. Another challenge was designing and balancing 10 levels with 
                    increasing difficulty. Creating engaging puzzles that properly utilized each elemental power required multiple 
                    iterations and playtests. Lastly, optimizing for both mobile and PC was tricky—I had to fine-tune controls for 
                    both touch and keyboard input while ensuring the UI scaled properly across different devices. Through testing 
                    and iteration, I was able to refine gameplay mechanics and create a smooth, immersive experience.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">Looking ahead, I would like to add boss levels at key points in the game to introduce 
                    more variety and strengthen the game's narrative. I also hope to expand the player's elemental abilities—such 
                    as adding movement speed differences or new interactions between powers—making gameplay even more dynamic. 
                    While this project was built within a 2-3 week timeline, there's plenty of room to expand and refine it further 
                    down the line.<br/><br/>

                    Elemental Escape was a great introduction to game development, and it's motivated me to explore this space even more.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default ElementalEscape;

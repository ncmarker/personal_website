import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Blackjack() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Blackjack");

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
              <p className="grey-text">This classic Blackjack game was developed as 
                a <span className="bold-gradient-text">personal project</span> to deepen my proficiency with React.js. After 
                completing a Front-End Development course at USC, where I was introduced to React.js, I embarked on this project to 
                enhance my skills in building web applications and making API requests.<br/><br/>
                Leveraging a Deck of Cards API, I created a React app that accurately simulates the Blackjack game experience. 
                This project allowed me to apply key concepts such as component-based architecture, state management, and 
                asynchronous operations. By integrating the deck of cards API, I practiced handling real-time data and ensuring 
                seamless interactions within the app.<br/><br/>
                As an enthusiast of card games like Blackjack and Poker, I found it enjoyable to recreate a digital version of a 
                game I am well-acquainted with. Drawing inspiration from various online card games, I designed an intuitive user 
                interface and crafted a thoughtful user flow, aiming for an engaging and user-friendly experience.<br/><br/>
                Although it was <span className="bold-gradient-text">one of my first projects</span>, this Blackjack game showcases 
                my commitment to continuous learning and growth as a software engineer. It reflects my passion for building 
                interactive applications and my ability to translate ideas into functional, well-designed software.</p>
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
                <p className="grey-text">The front end of Blackjack is developed 
                    using <span className="bold-gradient-text">React.js</span>, using vanilla <span className="bold-gradient-text">CSS</span> for 
                    the design and <span className="bold-gradient-text">JavaScript</span> for all actions and API requests.<br/><br/>
                    To start the game, the user must first &apos;purchase&apos; chips to bet with. Each player starts out with 
                    $100 and can purchase chips of their choosing. This is all done using <span className="bold-gradient-text">state variables</span> with 
                    React. The user is then able to receive their first hand of cards. All card actions are done with a request to 
                    the <span className="bold-gradient-text">Deck of Cards API</span>, providing actions like shuffle, deal a card, cut the deck, 
                    etc. Upon receiving the cards, the user has the opportunity to bet by clicking the chips they would like to add to the pot. 
                    Then, they can either “Hit” (receive another card to get closer to 21) or “pass” (let the dealer take their turn). If the user 
                    has reached 21 or greater with the cards in their hand, their turn automatically ends and the dealer&apos;s turn begins. Both 
                    actions make a request to the Deck of Cards API to deal a card to either the user or the dealer.<br/><br/>
                    Once both the user and the dealer have taken their turn, the sum of both hands are each calculated. If the sum 
                    of either player is greater than 17 the Ace takes on a value of one for that player, otherwise it takes on a 
                    value of 11. The user may continue playing the game and &apos;purchasing&apos; more chips until they have 
                    gone &apos;bankrupt&apos;, a point at which they have lost and will need to restart. Again, this functionality 
                    is all built with JavaScript.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">As this was one of my first projects using React.js, a main challenge was becoming 
                    accustomed with best practices as a developer and how to properly create and build a React app. More technical 
                    challenges at the time revolved around ensuring all state variables were updated accordingly with each 
                    action. For example, when betting, the user&apos;s funds have to temporarily decrease while bets are made, 
                    and then at the conclusion of the game final money transfers are made.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">As I have grown extensively as a developer since the creation of this project, I would 
                    like to return to the game and update the UI slightly. I would also like to add a backend database so that 
                    user&apos;s can log in and resume where they left off, while also keeping track of leaderboard players and more. 
                    I would also like to incorporate some sort of multiplayer aspect to the game to enhance the user experience.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Blackjack;

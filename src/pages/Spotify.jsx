import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Spotify() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Song Guess");

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
              <p className="grey-text">The Spotify Song Guessing Game was developed after I completed a back-end development course 
                    at university. This course equipped me with essential skills in <span className="bold-gradient-text">database 
                    management, SQL queries, PHP programming, session variables</span>, and more. Leveraging these skills, I 
                    created a comprehensive platform that offers a multifaceted user experience.<br/><br/>
                    In this project, users can log into their accounts, update their profile data, and view a leaderboard featuring 
                    all players of the game. The core functionality of the platform is the song guessing game, where users select a 
                    genre of choice and attempt to guess songs correctly. This engaging feature is powered by 
                    the <span className="bold-gradient-text">Spotify API</span>, which provides song data, and AJAX requests, which 
                    facilitate dynamic and seamless interactions within the web app.<br/><br/>
                    Developing this project allowed me to gain hands-on experience in building a full-stack web application with a 
                    robust database connection. It also helped me deepen my understanding of integrating third-party APIs and 
                    managing real-time data updates. Moving forward, I aim to continue experimenting with my favorite APIs and 
                    creating more innovative and enjoyable applications.</p>
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
                <p className="grey-text">The development of the Spotify Song Guessing Game involved creating a comprehensive 
                    platform using a robust back-end infrastructure and dynamic front-end interactions. The entire program is 
                    supported by a <span className="bold-gradient-text">database with three tables:</span> the main table for 
                    users, and two normalized tables for profile pictures and song genres, which use foreign and primary keys to 
                    maintain efficient data relationships.<br/><br/>
                    The front-end of the platform is built using <span className="bold-gradient-text">HTML/CSS</span> embedded 
                    within <span className="bold-gradient-text">PHP</span> files, allowing dynamic content presentation and database 
                    interaction. PHP is used for server-side processing, including database manipulation and presenting data on the 
                    front end after retrieval from the database. The back-end is constructed with PHP and <span className="bold-gradient-text">MySQLi</span>, 
                    handling the application's logic and data management. <span className="bold-gradient-text">AJAX</span> facilitates real-time 
                    communication between the client and server, ensuring seamless user experience and interaction with 
                    the <span className="bold-gradient-text">Spotify API</span>.<br/><br/>
                    The authentication process is designed to ensure security and user convenience. When a user logs in, a series 
                    of checks are performed. If the user attempts to sign up with an already registered email, an error message is 
                    displayed. Similarly, incorrect email and password combinations trigger error notifications. Valid login 
                    credentials navigate the user to their profile page within the platform, and prior to logging in, the 
                    navigation bar links remain disabled to prevent bypassing the login step. To ensure security, user passwords 
                    are encrypted using <span className="bold-gradient-text">SHA-256</span> before being stored in 
                    the database.<br/><br/>
                    Once logged in, users can modify their profile information, including their favorite song, favorite genre, 
                    profile picture, email, and password. These modifications are handled through SQL UPDATE queries that 
                    dynamically update the user's record in the database, ensuring that the profile data is always current.<br/><br/>
                    The leaderboard feature allows users to view the top-scoring players of the game. A SQL SELECT query is used 
                    to retrieve and display the profile data of users with the highest scores. If a search parameter is specified, 
                    the query filters the results to include only those users whose usernames contain the search term. This feature 
                    provides a competitive element to the game, encouraging user engagement.<br/><br/>
                    The core functionality of the platform, the song guessing game, integrates the Spotify Web API. Users must 
                    first authenticate their Spotify profile, granting the platform a temporary access token to make song requests. 
                    After selecting a genre and clicking "Begin," an AJAX request to the Spotify API retrieves 30 songs from the 
                    chosen genre. The response is parsed to extract the preview URLs for each song, which are then played 
                    consecutively using a hidden audio tag.<br/><br/>
                    During the game, users can guess the song name by typing it in the input field and clicking "Submit." A correct 
                    guess increments their score and moves to the next song. If the guess is incorrect, the user must continue to 
                    guess. Users can also click "Skip" to move on to the next song if they are unsure of the current one. At the 
                    end of the session, a SELECT query fetches the user's current high score from the database. If the new score 
                    exceeds the previous high score, an UPDATE query is executed to record the new high score. Users can replay 
                    the game as many times as they wish, choosing from the available genres.<br/><br/>
                    Overall, the Spotify Song Guessing Game project demonstrates a sophisticated integration of database 
                    management, secure user authentication, dynamic content retrieval from an external API, and interactive 
                    front-end elements. This project showcases my ability to build a full-stack web application that provides an 
                    engaging and user-friendly experience.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={project.systemDesign} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The most challenging part of this project was implementing the song guessing game feature. 
                    Fetching all songs related to a specific genre from the Spotify API and parsing them to obtain the song names 
                    and preview URLs was the initial step. Subsequently, the complexity increased with the need to play each song 
                    preview, start a timer, and simultaneously check user guesses to add points. Although not extremely technically 
                    demanding, this aspect involved numerous moving parts that needed to function cohesively. Mapping out the 
                    interactions between the Spotify API, the game timer, and user input required meticulous planning and precise 
                    execution to ensure a seamless and engaging user experience.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">Looking ahead, I plan to enhance the song guessing game by adding more options and 
                    features. This includes expanding the genre selection and introducing new game modes such as guessing the 
                    lyrics or speaking the song title instead of typing it. Additionally, I aim to explore multiplayer 
                    capabilities, allowing users to compete with friends in real-time to see who can guess more songs from the 
                    same batch. To increase user engagement, I envision incorporating daily challenges and other gamified elements 
                    that encourage users to return to the platform regularly. These enhancements will not only diversify the 
                    gameplay experience but also leverage advanced features and interactions to create a more dynamic and 
                    enjoyable application.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Spotify;

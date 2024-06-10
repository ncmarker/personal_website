import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function MyPassword() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "MyPassword");

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
              <p className="grey-text">This project, MyPassword, was created after completing an Advanced Programming in Python 
                course at university. In this course, we learned the basics of creating 
                and <span className="bold-gradient-text">training our own machine learning models</span> and how 
                to <span className="bold-gradient-text">develop a backend with Flask</span>, among other things. I wanted to create 
                a project that reflected the new skills I gained throughout the semester.<br/><br/>
                MyPassword is a comprehensive application that evaluates the strength of user passwords, categorizing them as 
                weak, medium, or strong. It also displays a graph of all passwords in the dataset along with their strength 
                classifications and allows users to add their passwords to the dataset.<br/><br/>
                This project was a significant step in advancing my understanding of how basic machine learning models work, 
                building on the foundation laid by my previous Mock Google Search project. By developing MyPassword, I was able to 
                apply and expand my knowledge in a practical, real-world context. I aim to continue exploring machine learning, 
                diving deeper into the details and complexities of model training and application.</p>
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
                <p className="grey-text">The development of MyPassword involved several key technical components, focusing on 
                    assessing password strength, adding new passwords to the dataset, and visualizing password strength frequencies. 
                    The entire project was built using a <span className="bold-gradient-text">Flask backend</span>, handling both 
                    GET and POST requests, with the front end consisting of HTML templates.<br/><br/>
                    To assess password strength, I first trained a machine learning model using a dataset of 100,000 passwords 
                    from Kaggle. This dataset included passwords labeled as Weak, Medium, or Strong. I 
                    used <span className="bold-gradient-text">scikit-learn&apos;s Random Forest algorithm</span> to train the model. 
                    Initially, the model struggled to accurately predict password strength, 
                    necessitating <span className="bold-gradient-text">feature engineering</span> to enhance its performance. Key 
                    features such as password length, the inclusion of special characters and numbers, and entropy (a measure of 
                    randomness) were added. This iterative process of training and evaluating the model using a confusion matrix 
                    led to significant improvements, ultimately achieving an <span className="bold-gradient-text">accuracy score of 99%</span> with 
                    an <span className="bold-gradient-text">80/20 train/test split</span>.<br/><br/>
                    The predicted strength is displayed graphically as a point on a line graph. This graph was created 
                    using <span className="bold-gradient-text">numpy</span> and <span className="bold-gradient-text">matplotlib</span>, employing 
                    specific styling to achieve a gradient effect on the line.<br/><br/>
                    After a user receives a password strength prediction, they can add their password and its corresponding 
                    strength to the dataset. This feature allows the dataset to grow dynamically, continually enhancing the model's 
                    training data. The provided password and strength are written to the CSV file in the same format as the initial 
                    dataset, ensuring consistency.<br/><br/>
                    To visualize the distribution of password strengths within the dataset, the program generates a histogram. 
                    This graph shows the number of passwords in each strength category (Weak, Medium, Strong), providing an 
                    overview of the dataset's composition. Like the line graph for predicted strength, this histogram was created 
                    using numpy and matplotlib. Both graphs are generated with each call to the backend API and temporarily stored 
                    as base64 data, which is then displayed on the front end.<br/><br/>
                    The seamless integration of these components demonstrates a comprehensive understanding of machine learning, 
                    data processing, and web development, reflecting the skills and knowledge gained from my Advanced Programming 
                    in Python course.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">The most difficult part of the project was obtaining an accurate machine learning model. 
                    Initially, the model's predictions were highly inaccurate, despite numerous attempts to adjust hyperparameters 
                    such as the number of decision trees and their depth in the Random Forest algorithm. These early models 
                    struggled to differentiate the specific characteristics influencing password strength. To address this, I 
                    implemented feature engineering, adding critical features like password length, the inclusion of special 
                    characters and numbers, and entropy (randomness). These enhancements significantly improved the model's 
                    ability to classify passwords accurately. After these adjustments, the model achieved a 99% accuracy rate with 
                    an 80/20 train/test split.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">Looking ahead, I plan to transition from HTML templates to a React front end to enhance 
                    the user interface and experience. Additionally, I aim to develop a Chrome extension interface for this 
                    program, allowing users to test password strengths directly within their browser. This will involve adding 
                    additional security measures to protect user data. These future steps will further refine the application, 
                    making it more user-friendly and accessible while continuing to expand my skills in front-end development and 
                    application security.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default MyPassword;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function PersonalizedCashback() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Cashback");

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
                Personalized Cashback is a real-time rewards simulation engine that intelligently <span className="bold-gradient-text">generates cashback offers tailored to 
                individual spending patterns and live store inventory</span>. Built as a pre-internship project for my upcoming role at OnePay, 
                the goal was to familiarize myself with key technologies I'll be using—Kafka messaging, TypeScript functional programming, 
                and React Native—while building something that mimics a real-world fintech solution.<br/><br/>

                The system encourages users to spend more by offering targeted cashback deals on overstocked inventory categories from 
                specific stores—<span className="bold-gradient-text">helping retailers offload excess inventory and providing users with personalized incentives</span>.<br/><br/>

                This project serves both as a technical learning exercise and a conceptual prototype for a fintech cashback rewards system. 
                Beyond personal skill development, I aimed to simulate a real-world infrastructure capable of live data streaming, message 
                processing, and responsive analysis. The system mimics how fintech companies might dynamically offer personalized cashback 
                rewards based on user purchasing behavior and store inventory trends. I also made accessibility a top priority—by 
                containerizing the backend with Docker and writing a detailed README, I ensured that others could easily clone the project 
                and run the full stack locally with minimal configuration.

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
                    The project is built entirely with <span className="bold-gradient-text">TypeScript</span> across both the frontend and backend. The backend is containerized 
                    using <span className="bold-gradient-text">Docker</span>, which consists of four main services: <span className="bold-gradient-text">Kafka, Zookeeper, Kafka Connect, and a custom Kafka Consumer</span>. 
                    Zookeeper manages and coordinates Kafka brokers, while Kafka handles the real-time publish-subscribe messaging 
                    system that underpins the entire application. Kafka Connect is responsible for launching a scripted setup that 
                    integrates with Kafka <span className="bold-gradient-text">Datagen</span>—this module generates synthetic inventory and transaction data in real time. These 
                    messages are formatted using custom schemas (stored as JSON) and are streamed into two Kafka topics: inventory and 
                    transactions.

                    Kafka Connect runs a custom script that automatically boots the datagen connectors, injecting schema-based 
                    messages into the topics every second to simulate real-world transaction frequency. The data cadence can be 
                    configured to simulate different timeframes (e.g., hourly data or long-term purchase histories over weeks or 
                    months). Once the data is flowing, a Kafka Consumer service subscribes to both topics and acts as a processing 
                    layer that forwards the messages to a <span className="bold-gradient-text">WebSocket server</span>. This server enables a persistent stream of updates that can 
                    be consumed by frontend clients.

                    On the frontend, built with <span className="bold-gradient-text">React Native</span> and TypeScript, a WebSocket client connects to this server and receives 
                    transaction and inventory messages in real time. This allows users to view live transaction logs and current inventory 
                    across stores. When a user taps “Refresh Cashback Rewards,” the app processes all recent data using a rule-based engine 
                    that checks two thresholds: a minimum number of purchases from a specific category, and a minimum level of inventory 
                    (per category) that qualifies as oversupply. The system then identifies users whose transaction history matches reward 
                    criteria and maps them to stores with qualifying oversupply, returning personalized cashback rewards. For each user, 
                    only the most optimal reward is selected—typically the one tied to the category with the highest purchase count or 
                    store with the greatest oversupply. The data processing pipeline is modular and extensible, making it easy to introduce 
                    additional variables like location, loyalty status, or inventory aging.
                  </p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={`${process.env.PUBLIC_URL}${project.systemDesign}`} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">This was the first project I developed entirely on my own that relied on Docker for 
                    backend infrastructure, which came with a steep learning curve. Understanding the relationship 
                    between Docker services—especially how Kafka, Zookeeper, and Kafka Connect coordinate in a containerized 
                    network—required considerable research and experimentation. Learning how to configure and customize Kafka 
                    Datagen with my own schemas, and ensuring message flow into topics in real time, took multiple iterations 
                    to get right. I initially intended to run the frontend in a Docker container as well, but encountered 
                    significant hurdles when trying to test the app on my phone via Expo Go. Since Docker containers are 
                    isolated by default, this created connectivity issues when trying to access the React Native server on a 
                    physical device. I ultimately chose to run the frontend locally outside of Docker to ensure smoother 
                    development and testing across devices. This project also marked my first hands-on experience with Kafka 
                    and stream-based messaging in general, and it took time to master how topics, brokers, consumers, and 
                    producers interact in a fault-tolerant and scalable messaging system.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">With a functional prototype and baseline system working end-to-end, the next phase of 
                    this project involves enhancing the reward algorithm's complexity and realism. I plan to incorporate more 
                    variables into the decision engine—such as user location, purchase frequency, store-specific shipment 
                    schedules, and administrative configurations—to simulate real-world targeting strategies more closely. 
                    These enhancements will require building additional filters and possibly integrating a database layer for 
                    persistent state and historical analysis. I am also interested in seeking feedback from professionals in 
                    the fintech and retail industries to understand potential real-world applications, constraints, and value. 
                    Although this began as a personal learning project, I now see promising use cases in loyalty management, 
                    demand shaping, and user engagement strategies for fintech platforms, and would like to explore how this 
                    idea could evolve into a production-ready tool.</p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default PersonalizedCashback;

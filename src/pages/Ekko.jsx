import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from '../components/common/BackButton.jsx';
import Button from '../components/common/Button.jsx';
import LangIcon from '../components/common/LanguageIcon.jsx';
import TableOfContents from '../components/composite/TableOfContents.jsx';

import projectsData from '../data/projectData';


function Ekko() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const project = projectsData.find(p => p.title === "Ekko");

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
              <p className="grey-text">At the <span className="bold-gradient-text">Stanford TreeHacks 2024 Hackathon</span>, 
                my team—comprising another developer, a product manager, and myself—developed Ekko, a personalized language learning 
                vocal chatbot. Growing up in a multicultural area where English was not the primary language for many, we observed the 
                challenges associated with acquiring a new language for everyday interactions. Common scenarios such as visits to the 
                doctor&apos;s office, grocery shopping, or attending school underscore that grasping a language socially extends 
                beyond mere vocabulary.<br/><br/>
                While popular platforms like Duolingo mainly focus on vocabulary without addressing nuances like slang or tone, 
                Ekko was crafted to fill this gap. Our solution is designed to assist users in mastering pronunciation and 
                understanding linguistic subtleties through real-time conversational practice.<br/><br/>
                During the 36-hour hackathon, we not only completed our project but also earned two prestigious 
                awards: <span className="bold-gradient-text">Best Use of AI Models</span> from together.ai 
                and <span className="bold-gradient-text">Best Use of Bun</span> from Bun, 
                accumulating <span className="bold-gradient-text">$5,000 in prize money</span>. We are immensely thankful for 
                the opportunity this hackathon provided and are excited to apply our learning to future projects and 
                competitions.</p>
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
                <p className="grey-text">Pixel's front end is crafted using <span className="bold-gradient-text">React.js</span>, 
                enhanced by <span className="bold-gradient-text">Tailwind</span> and <span className="bold-gradient-text">Material 
                Tailwind</span> for a swift and structured design system implementation. On the back 
                end, <span className="bold-gradient-text">Bun.sh</span> and <span className="bold-gradient-text">Elysia.js</span> manage 
                server-side logic, while <span className="bold-gradient-text">Convex</span> handles all database operations. 
                Post-hackathon, due to Bun&apos;s limited support across cloud providers, we transitioned to <span className="bold-gradient-text">Next.js</span> to 
                facilitate Ekko's deployment on Vercel.<br/><br/>
                Ekko&apos;s proficiency metric model adheres to ACTFL guidelines, which establish criteria for assessing 
                language proficiencies. We developed a custom classification model using <span className="bold-gradient-text">Scikit-Learn</span>, structured 
                around three key processes. Initially, the CountVectorizer tokenizes the input phrase. Subsequently, the TfidfTransformer 
                converts these phrases into term frequency-inverse document frequency vectors, effectively normalizing for document length. 
                The process culminates with the MultinomialNB, which calculates the probability of a word's occurrence, based on document 
                classification. A confusion matrix was employed to refine and verify the model's accuracy.<br/><br/>
                Due to the unavailability of a suitable dataset for language proficiency, we 
                leveraged <span className="bold-gradient-text">together.ai&apos;s</span> LLM to generate 500 simulated 
                conversations for each ACTFL proficiency level. This data was instrumental in training our model, utilizing an 
                80/20 train-test split, ultimately achieving a 70% accuracy rate.<br/><br/>
                The AI-driven conversation capabilities are powered by <span className="bold-gradient-text">together.ai&apos;s Hermes 2 Yi 34B</span>. 
                The decision to employ Hermes over alternatives like Mistral and Llama, which exhibited a propensity for &apos;spanglish&apos;, was 
                guided by the need for coherent responses. All user interactions are stored in a knowledge base, comprising both vector 
                embeddings and the actual messages, facilitated by the <span className="bold-gradient-text">BERT-80M-2K-Retrieval</span> model 
                from together.ai to sift through past messages for pertinent information in response generation.<br/><br/>
                Ekko&apos;s voice interface is powered by <span className="bold-gradient-text">Deepgram&apos;s speech-to-text API</span>, which 
                transcribes user speech into text. The voice responses are generated by <span className="bold-gradient-text">ElevenLabs&apos; 
                multilingual V1 text-to-speech model</span>, with help from <span className="bold-gradient-text">OpenAI&apos;s SDK</span>. To 
                enhance real-time interaction, Ekko&apos;s responses are simultaneously produced in text and MP3 formats, ensuring minimal 
                delay and maintaining the natural flow of conversation.</p>
            </section>

            <section id="system-design">
              <h1 className="heading mb-16">System Design</h1>
              <img src={project.systemDesign} alt="System Design"/>
            </section>

            <section id="challenges" className="flex flex-col">
              <h1 className="heading mb-16">Challenges</h1>
                <p className="grey-text">There were various challenges faced throughout this project. First, Deepgram&apos;s speech-to-text 
                API does not perform well with grammatical mistakes (a central aspect of language learning) and often will correct the user&apos;s 
                grammar if only slightly wrong. Additionally, we currently do not have a metric of measuring pronunciation, as the 
                speech-to-text model only converts verbal conversation to text as it is heard.<br/><br/>
                We also faced complexity when it came to creating a model for predicting our proficiency metric, as many models are 
                not fine tuned across many languages and proficiencies. We built our own model using Spanish proficiency, however 
                we hope to expand in the future.</p>
            </section>

            <section id="future-steps" className="flex flex-col">
              <h1 className="heading mb-16">Future Steps</h1>
                <p className="grey-text">In the future, we hope to fine tune our model on more languages so that the user can pick 
                the language they are trying to learn and switch between different languages throughout their language learning 
                journey. We also hope to improve our ability to understand specific pronunciations for words, and improve accuracy 
                for grammatical mistakes. Ultimately, we are very pleased with what we were able to accomplish in only 26 hours, 
                and we are excited to continue building at hackathons in the future. </p>
            </section>

            </div>
        </div>
    </div>
  );
}

export default Ekko;

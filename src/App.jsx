import React from 'react';
import './App.scss';
import './styles/main.scss';

import Button from './components/common/Button.jsx';
import BackButton from './components/common/BackButton.jsx';
import LangIcon from './components/common/LanguageIcon.jsx';
import ContactIcon from './components/common/ContactIcon.jsx';
import TextInput from './components/common/TextInput.jsx';
import PillarCard from './components/composite/PillarCard.jsx';


function App() {
  return (
    <div className="">
      <Button styleType="filled" text="Resume" link="https://www.google.com"/>
      <Button styleType="unfilled" text="GitHub" link="https://www.google.com"/>

      <BackButton link="https://www.google.com"/>

      <LangIcon size="large" image="/images/icons/js_icon.png" alt="JS icon"/>
      <LangIcon size="medium" image="/images/icons/cpp_icon.png" alt="JS icon"/>
      <LangIcon size="small" image="/images/icons/js_icon.png" alt="JS icon"/>

      <ContactIcon image="/images/icons/github_icon.png" alt="GitHub icon" link="https://www.github.com"/>
      <ContactIcon image="/images/icons/phone_icon.png" alt="Phone icon" link="tel:+14843653437"/>
      <ContactIcon image="/images/icons/linkedin_icon.png" alt="LinkedIn icon" link="https://www.linkedin.com/in/nickmarker"/>
      <ContactIcon image="/images/icons/resume_icon.png" alt="Resume icon" link="https://www.google.com"/>

      <TextInput size="short" placeholder="Full Name"/>
      <TextInput size="long" placeholder="Message..."/>

      <PillarCard title="Design" image="/images/icons/design_icon.png" alt="design icon" text="Prior experience in UX Design and Research, allowing me to have exposure to the full product lifecycle."/>
    </div>
  );
}

export default App;

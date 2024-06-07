import React, { useEffect, useState, useCallback } from 'react';

function TableOfContents(props) {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    const sectionOffsets = props.sections
      .map(section => {
        const element = document.getElementById(section.id);
        return element ? { id: section.id, offsetTop: element.offsetTop } : null;
      })
      .filter(Boolean);

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const currentSection = sectionOffsets.reduce((closest, section) => {
      if (scrollPosition >= section.offsetTop) {
        return section;
      }
      return closest;
    }, null);

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [props.sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex flex-col gap-4 border-l-[1px] border-white border-solid pl-8 sticky top-24">
      {props.sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleClick(e, section.id)}
          className={`sidebar-text ${activeSection === section.id ? 'sidebar-text-active' : ''}`}
        >
          {section.title}
        </a>
      ))}
    </div>
  );
};

export default TableOfContents;

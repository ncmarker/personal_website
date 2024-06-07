import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes, useLocation } from 'react-router-dom';
import './TransitionWrapper.scss';
import { useNavigation } from './NavigationContext';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const { direction, source } = useNavigation();

  const getClassNames = () => {
    if (source === 'project') {
      return direction === 'forward' ? 'slide-in' : 'slide-out';
    }
    return '';
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={getClassNames()}
        timeout={500}
      >
        <div>
          <Routes location={location}>
            {children}
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;

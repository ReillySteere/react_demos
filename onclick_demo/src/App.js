/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { BasicButton, BasicButton2, BasicButton3 } from './BasicButton';
import ThemeContext from './ThemeContext';

import UseHooks from './BasicInput';

import './App.css';

function App() {
  const [theme, setTheme] = useState('noHookSection');

  const toggleTheme = () => {
    if (theme === 'noHookSection') setTheme('useStateHookSection');
    if (theme === 'useStateHookSection') setTheme('noHookSection');

    // eslint-disable-next-line no-undef
    alert(`Theme is: ${theme}`);
  }

  return (
    // Switch between noHookSection and useStateHookSection and undefined
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <UseHooks />
        {/* <BasicButton onClick={toggleTheme} /> */}
        {/* Bad case */}
        {/* <BasicButton2 onClick={toggleTheme} selectedTheme={theme} /> */}
        <BasicButton3 onClick={toggleTheme} selectedTheme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

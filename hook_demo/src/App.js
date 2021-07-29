/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

import {
  NoHook, UseHooks, NoHook2, UseHooks2, NoHook3, UseHooks3,
} from './BasicInput';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <NoHook />
//       <UseHooks />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <NoHook2 />
//       <UseHooks2 />
//     </div>
//   );
// }

function App() {
  const [theme, setTheme] = useState('noHookSection');

  const toggleTheme = () => {
    if (theme === 'noHookSection') setTheme('useStateHookSection');
    if (theme === 'useStateHookSection') setTheme('noHookSection');
  }

  return (
    // Switch between noHookSection and useStateHookSection and undefined
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <NoHook3 />
        <UseHooks3 />
        <button
          className="colorButton"
          type="button"
          onClick={toggleTheme}
        >
          Change color
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

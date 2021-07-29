/* eslint-disable no-unused-vars */
import React from 'react';
import ThemeContext from './ThemeContext';

import {
  NoHook, UseStateHook, NoHook2, UseStateHook2, NoHook3, UseStateHook3,
} from './BasicInput';

import './App.css';

function App() {
  return (
    <div className="App">
      <NoHook />
      <UseStateHook />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <NoHook2 />
//       <UseStateHook2 />
//     </div>
//   );
// }

// function App() {
//   return (
//     // Switch between noHookSection and useStateHookSection and undefined
//     <ThemeContext.Provider value="useStateHookSection">
//       <div className="App">
//         <NoHook3 />
//         <UseStateHook3 />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

export default App;

import React, { useState } from 'react'
import './style.css'
import Card from './Card';

function Mode ()
{
    
            const [darkMode, setDarkMode] = useState(true);
  return (

<div className={darkMode ? "dark-mode" : "light-mode"}>
<div className="container">
  <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
  <div className="switch-checkbox">
    <label className="switch">
      <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
      <span className="slider round"> </span>
    </label>
  </div>
  <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
</div>
<div>
 <Card />
  {/* <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1> */}
</div>
</div>
  )
}

export default Mode;
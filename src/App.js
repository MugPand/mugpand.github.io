import * as React from 'react';
import './App.css';

import anime from 'animejs';

import TerminalCard from './TerminalCard';
import ProjectCard from './ProjectCard'


import { data } from './data';

function App() {
  //Logo Drawing
  anime({
    targets: '#lineDrawing .lines path',
    keyframes: [
      {
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function(el, i) { return i * 250 },
        direction: 'normal',
        opacity: [0, 1],
        duration: 3000,
        easing: 'easeInOutSine',
      },
      {
        delay: 1000,
        opacity: [1, 0],
        direction: 'normal',
        easing: 'linear',
        duration: 1000}
    ],

    loop: false
  });
  //Deletes the Logo drawing
  function deleteDiv() {
    var elem = document.getElementById("container");
    elem.parentNode.removeChild(elem);
  }
  //Delayed function that deletes the initial logo drawing
  setTimeout(deleteDiv, 6000);    

  return (
    
    <div className="App">
      <header className="App-header">

        <h1 className="Name">Mugdhesh Pandkar</h1>
        <h2 className="Bio">Computer Science @ Rutgers University-New Brunswick</h2>
        <TerminalCard/>
        <div id="test1"></div>
        <div id="projects"></div>
        <h1 className="Projects" id="projects"><span id="projectsSpan">Projects:</span></h1>

        {data.map(d => (
          <ProjectCard title={d.title} description={d.description} link={d.link} technologies={d.technologies} image={d.image}/>
        ))
        }

        <h6 className="Footer">Mugdhesh Pandkar &copy; 2022-2025</h6>

      </header>

    </div>
  );
}

export default App;

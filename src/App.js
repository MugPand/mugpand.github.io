import * as React from 'react';
import './App.css';

import anime from 'animejs';

import TerminalCard from './TerminalCard';
import ProjectCard from './ProjectCard'

import pathVisualizerLogo from './pathVisualizerLogo.jpg';
import rayCastingLogo from './2DRayCastingLogo.jpg';
import alzCheckLogo from './AlzCheckLogo.png';

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
        <ProjectCard title="Path Visualizer:" description="Pygame based GUI application that allows users to draw mazes, i.e. mark cells as free or blocked, and run BFS or DFS on them to find paths between a start & end cell." image={pathVisualizerLogo} link="https://github.com/MugPand/Path-Visualizer" technologies="Python, Pygame"/>
        <ProjectCard title="2D-Ray-Casting:" description="Ray visualizer built in python using the pygame library that allows users to move a light source around and cast the appropriate rays onto walls" image={rayCastingLogo} link="https://github.com/MugPand/2D-Ray-Casting" technologies="Python, Pygame"/>
        <ProjectCard title="AlzCheck:" description="HackRU Fall 2020 winning health track submission. An informative/training website to help individuals diagnosed with Alzheimer's." image={alzCheckLogo} link="https://github.com/MugPand/Alz-Check" technologies="HTML/CSS, JavaScript, Bootstrap, Google Maps API, Unity"/>
        <ProjectCard title="HeadlinerBot:" description="Discord bot that pings twitter accounts to keep servers up to date with breaking headlines." link="https://github.com/MugPand/HeadlinerBot" technologies="Python, Discord API, Twitter API"/>
        <ProjectCard title="Pyshell:" description="Unix Shell developed in Python." link="https://github.com/MugPand/Pyshell" technologies="Python"/>

        <h6 className="Footer">Designed & Developed by Mugdhesh Pandkar &copy; 2022</h6>

      </header>

    </div>
  );
}

export default App;

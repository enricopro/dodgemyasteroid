import React, { useEffect, useState } from 'react';
import '../../App.css';
import rocket from '../../config/images/rocket.png';
import AsteroidLauncher from './AsteroidLauncher';

function GameScreen() {

  const [mousePosition, setMousePosition] = useState({
    width: null,
    height: null
  });

  //updates mouse position on every change of postion
  useEffect(() => {
    window.addEventListener("mousemove", (event) => setMousePosition({width: event.clientX, height: event.clientY}));

    return () => window.removeEventListener("mousemove", (event) => setMousePosition({width: event.clientX , height: event.clientY }));
  }, []);

  return (
    <div className="GameField">

      <AsteroidLauncher />

      <img 
        src={rocket}
        alt="rocket" 
        className="RocketImage"
        style={{
          paddingLeft: mousePosition.width - 60,
          paddingTop: mousePosition.height - 60,
        }}/>

      
    </div>
  );
}

export default GameScreen;

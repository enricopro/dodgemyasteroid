import React, { useEffect, useState } from 'react';
import '../App.css';
import rocket from '../config/images/rocket.png';

function GameScreen() {

  const [mousePosition, setMousePosition] = useState({
    width: null,
    height: null
  });

  //updates mouse position on every change of postion
  useEffect(() => {
    window.addEventListener("mousemove", (event) => setMousePosition({width: event.clientX, height: event.clientY}));

    return () => window.removeEventListener("mousemove", (event) => setMousePosition({width: event.clientX + "px", height: event.clientY + "px"}));
  }, []);

  return (
    <div className="GameField">
      <img 
        src={rocket}
        alt="rocket" 
        style={{
          postion: "relative",
          marginLeft: mousePosition.width,
          marginTop: mousePosition.height,
        }}/>
    </div>
  );
}

export default GameScreen;

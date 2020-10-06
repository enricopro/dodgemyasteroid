import React, { useEffect, useState, useCallback } from 'react';
import '../../App.css';
import asteroid01 from '../../config/images/asteroid_01.png';
import asteroid02 from '../../config/images/asteroid_02.png';
import asteroid03 from '../../config/images/asteroid_03.png';
import asteroid04 from '../../config/images/asteroid_04.png';

var firstLaunch = false;

function AsteroidLauncher() {

  const [asteroidCoord, setAsteroidCoord] = useState({
    width: null,
    height: null,
  });

  const [asteroidCoefficient, setAsteroidCoefficient] = useState(0);
  const [asteroidYIntersec, setAsteroidYIntersec] = useState(0);


  //defines random x,y where asteroid starts
  useEffect(() => {
    
    if (firstLaunch) {
      return;
    }
    else {
      firstLaunch = true;
    }

    let chooser = Math.random();
    let secondChooser = Math.random();
    
    if (chooser <= 0.50) {
      if (secondChooser <= 0.50) {
        setAsteroidCoord({
          width: Math.random()*window.innerWidth,
          height: 0,
        });
      }
      else {
        setAsteroidCoord({
          width: Math.random()*window.innerWidth,
          height: window.innerHeight,
        });
      }
    }
    else {
      if (secondChooser <= 0.50) {
        setAsteroidCoord({
          width: 0,
          height: Math.random()*window.innerHeight,
        });
      }
      else {
        setAsteroidCoord({
          width: window.innerWidth,
          height: Math.random()*window.innerHeight,
        });
      }
    }
  }, []);


  //defines angular coefficient of the asteroid's trajectory
  useEffect(() => {
    
    let chooser = Math.random();
    let coefficient = Math.random()*10;

    if (chooser <= 0.5) {
      coefficient = - coefficient;
    }

    let q = asteroidCoord.height-(coefficient*asteroidCoord.width)
    
    setAsteroidCoefficient(coefficient);

    setAsteroidYIntersec(q);

  }, []);


  const updateCoords = useCallback(() => {
    if (asteroidCoord.width === 0) {

      setAsteroidCoord((prevCoords) => ({ 
        width: prevCoords.width + 5,
        height: asteroidCoefficient*(prevCoords.width + 5) + asteroidYIntersec
      }));

    }
    else {

      setAsteroidCoord((prevCoords) => ({
        width: (asteroidCoord.height + 5 - asteroidYIntersec)/asteroidCoefficient,
        height: asteroidCoord.height + 5
      }));  

    }
  }, [asteroidCoefficient, asteroidCoord, asteroidYIntersec]);


    //updates asteroid's coordinates while moving
    useEffect(() => {
      setTimeout(updateCoords, 30);
    }, [updateCoords]);

  return (

      <img 
        src={asteroid01}
        alt="asteroid" 
        className="AsteroidImage"
        style={{
          paddingLeft: asteroidCoord.width,
          paddingTop: asteroidCoord.height
        }}/>

  );
}

export default AsteroidLauncher;

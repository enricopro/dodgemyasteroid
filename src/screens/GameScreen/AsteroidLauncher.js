import React, { useEffect, useState } from 'react';
import '../../App.css';
import asteroid01 from '../../config/images/asteroid_01.png';
import asteroid02 from '../../config/images/asteroid_02.png';
import asteroid03 from '../../config/images/asteroid_03.png';
import asteroid04 from '../../config/images/asteroid_04.png';


function AsteroidLauncher() {

  return (

      <img 
        src={asteroid01}
        alt="asteroid" 
        className="AsteroidImage"/>

  );
}

export default AsteroidLauncher;

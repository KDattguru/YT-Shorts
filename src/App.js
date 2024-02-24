// App.js
import React from 'react';
import VerticalVideoPlayer from '../src/components/VerticalVideoPlayer';
import logo from './images/logo.png';
import NavBarC from './components/NavBarC'
const App = () => {
  const videoSource = 'https://www.youtube.com/embed/Jwpr6V_ou4k';
  const videoSource1 = 'https://www.youtube.com/shorts/ALBJqnHVM3w?feature=share';
  const videoSource2 = 'https://www.youtube.com/shorts/2vFg6lb3tSY?feature=share';
   
  return (
    <>
    <NavBarC />
    <div className="container">
    
      <h1><img src={logo} alt="Logo" height="100px" width="100px" />YouTube Shorts </h1>
    
    
    </div>
      <VerticalVideoPlayer videoSrc={videoSource} videoSrc1={videoSource1}  videoSrc2={videoSource2} />
      </>
  );
};

export default App;

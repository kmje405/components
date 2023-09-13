import React from 'react';
import "./WelcomeSection.scss";
import kev from "../../assets/avatarMaskRound.png"

const WelcomeSection: React.FC = () => {
  return (
    <div id="welcome">
       <div className="kev">
          <img src={kev} alt="A round badge photo of Kevin he is smiling, wearing a white T-shirt with a red flannel overlay" />
        </div>
      <div className="text-container">
        <div className="text-content">
          <h1>Hi, I'm Kev!</h1>
          <h2>Software Developer & ASL Interpreter</h2>
          <p>Building a more inclusive world, one sign, or one line of code at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

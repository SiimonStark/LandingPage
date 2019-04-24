import React from 'react';
import imageLink from '../images/imageLink';

function Social() {
  return (
    <aside className="Social">
      <a href="https://www.linkedin.com/in/justinpyktel/" target="blank">
        <img src={imageLink.linkedInCircle} alt="LinkedIn Icon" />
      </a>
      <a href="https://github.com/SiimonStark" target="blank">
        <img src={imageLink.gitHubCircle} alt="Github Icon" />
      </a>
      <a href="https://twitter.com/SiimonStark" target="blank">
        <img src={imageLink.twitterCircle} alt="Twitter Icon" />
      </a>
    </aside>
  );
}

export default Social;
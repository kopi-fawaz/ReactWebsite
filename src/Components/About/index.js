import React from 'react'
import {AboutAnchor, AboutDesc, AboutInfo, AboutSection, AboutTitle, AboutDir, Span} from './style.js';

function About() {
  return (

    <AboutSection>
        <div className="container">
            <AboutInfo>
                <AboutTitle><Span>This is</Span> Me</AboutTitle>
                <AboutDir>Creative Director</AboutDir>
                <AboutDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <AboutAnchor href="#">explicabo</AboutAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutDesc>
                <AboutDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutDesc>
            </AboutInfo>
        </div>
    </AboutSection>

  );
}

export default About;

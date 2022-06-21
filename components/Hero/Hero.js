import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      {/* Some text about what you are doing */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam quas enim fugit natus repudiandae ullam! 
    </SectionText>
    <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;
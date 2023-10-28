import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection style={{ paddingTop: "20px" }}>
      <SectionTitle style={{ marginTop: "40px" }} main center>
        Hello, I'm <br></br>
        Muhammad Usman {/* <br /> My Personal Portfolio */}{" "}
      </SectionTitle>{" "}
      <SectionText>A Full Stack Developer </SectionText>{" "}
      <Button onClick={() => (window.location = "www.google.com")}>
        Download CV{" "}
      </Button>{" "}
    </LeftSection>{" "}
  </Section>
);

export default Hero;

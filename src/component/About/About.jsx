import React from "react";
import styled from "styled-components";
import { MdOutlineWeb } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import Card from "./Card";
function About() {
  return (
    <Container>
      <h4>
        About <span className="green">Me</span>
      </h4>
      <h1>My Skills</h1>
      <Cards>
        <Card
          Icon={MdOutlineWeb}
          title={"Web Developer"}
          disc={`'ve completed the front-end
course and currently learning the back-end. With my
experience and dedication, I'm confident I can contribute to
your company's success`}
        />

        <Card
          Icon={GiSkills}
          
          title={"Technical Skills"}
          disc={`Java Script
Html/CSS  

React 

Bootstrap`}
        />

        <Card
          Icon={FaLanguage}
          title={"Languages"}
          disc={`English 
Amharic
German`}
        />
      </Cards>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }

`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
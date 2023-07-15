import React from "react";
import styled from "styled-components";
import { MdOutlineWeb } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
function About() {
  return (
    <Container id="about">
      <Slide direction="down">
        <h4>
          About <span className="green">Me</span>
        </h4>
        <h1>My Skills</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdOutlineWeb}
            title={"Web Developer"}
            disc={`I have a strong background in Computer Science and recently completed comprehensive MERN-Stack courses. My skills include front-end development with HTML, CSS, and JavaScript, along with proficiency in React.js for dynamic user interfaces. On the back end, I am experienced in Node.js, Express.js, and MongoDB, enabling me to create robust server-side logic and efficient APIs. I am adept at problem-solving, effective communication, and I have a strong commitment to continuous learning.
            I am currently based in Berlin, Germany, and hold a valid resident permit. I am open to travel once a week at maximum. In terms of language skills, I am fluent in English and have a basic understanding of German.
            `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GiSkills}
            title={"Technical Skills"}
            disc={`Java Script |
Html|CSS |  

React |

Bootstrap| Sass |Node.js | MongoDB`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaLanguage}
            title={"Languages"}
            disc={`English |
Amharic |
German`}
          />
        </Slide>
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

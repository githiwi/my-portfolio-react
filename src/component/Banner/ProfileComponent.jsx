import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import hiwiphoto from "../../assets/images/hiwi2.jpg";

function ProfileComponent() {
  return (
    <Container>
      <Text>
        <h4 className="green">
          Hello<span className="green"> I'm</span>
        </h4>
        <h1 className="green">Hiwot Eticha</h1>
        <h3>Web Developer</h3>
        <p>
          I'm Hiwot, a hard-working professional with a degree in Computer
          Science and six years of experience as an Air Traffic Controller.
          After I moved to Germany and joined DCI to pursue web development.
          I've completed the front-end course and currently learning the
          back-end. With my experience and dedication, I'm confident I can
          contribute to your company's success.
        </p>
        <button>Lets Talk</button>
        <Social>
          <p>check out my</p>
          <div className="social-icons">
            <span>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </span>
            <span>
              <a href="#">
                <FaGithub />
              </a>
            </span>
            <span>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </span>
          </div>
        </Social>
      </Text>
      <Profile>
        <img src={hiwiphoto} alt="hiwi" />
      </Profile>
    </Container>
  );
}

export default ProfileComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }`;
const Social = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
gap: 1rem;
p {
  font-size: 0.9rem;
  @media (max-width: 690px) {
    font-size: 0.7rem;
  }
}
.social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }`;
const Profile = styled.div`
img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }`;

import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { MdPhoneInTalk, MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { TfiInstagram } from "react-icons/tfi";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Slide} from "react-awesome-reveal";
function Footer() {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
       <Slide direction="left"> <h1>Portfolio</h1></Slide>
       <Slide direction="left">
        <div className="address">
          <h1>Address</h1>
          <p>13355 berlin Germany</p>
        </div>
        </Slide>
        <div className="links">
          <h1>Contact me directly</h1>
          <div>
            <span>
              {" "}
              <MdPhoneInTalk />
            </span>
            <a href="tel:+49 176 --- ---">+49 176 21535321</a>
          </div>

          <div>
            <span>
              {" "}
              <FiMail />
            </span>
            <a href="h--- @gmail.com">hiwi5555@gmail.com</a>
          </div>
        </div>

        <div className="profiles">
          <h1>Check my profiles</h1>
          <div className="icons">
            <span>
              <a href="https://github.com/githiwi">
                <AiOutlineGithub />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/hiwot-eticha-5ba8a4259/">
                <AiOutlineLinkedin />
              </a>
            </span>
            <span>
              {/* <a href="#">
              
              </a> */}
              <TfiInstagram />
            </span>
          </div>
        </div>
        <ArrowUp onClick={scrollUp}>
          <BsFillArrowUpSquareFill />
        </ArrowUp>
      </Profile>
      <Form>
        <form method="POST" action="https://formsubmit.co/tereteterethiwi@gmail.com">
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text"  placeholder="Fullname..." />
          </div>

          <div className="email">
            <span>
              <MdOutlineAlternateEmail />
            </span>
            <input type="email" name="email" placeholder="Email..." required/>
          </div>

          <div className="message">
            <span>
              <FiMail />
            </span>
            <textarea
              name="message"
              id=""
              cols=""
              rows=""
              placeholder="Message..."
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </Form>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }
    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }
  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }
  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    .icons {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: orange;
        }
        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }
  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }
    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

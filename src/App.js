import styled from "styled-components";
//import { Router,Routes} from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Header from "./component/Banner/Header";
import ProfileComponent from "./component/Banner/ProfileComponent";
import Footer from "./component/Footer/Footer";
import MyProjects from "./component/MyProjects/MyProjects";
import { Fade } from "react-awesome-reveal";
//import ThankYou from "./component/Footer/ThankYou";

function App() {
  return (
    <Container>
      <Banner>
        <Fade>
          <Header />
          <ProfileComponent />
        </Fade>
      </Banner>
      <About />
      <TheColor>
        <MyProjects />
      </TheColor>

      <TheColor>
        <Footer />
      </TheColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;
const TheColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

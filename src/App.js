import styled from "styled-components";
import "./App.css";
import Header from "./component/Banner/Header";
import ProfileComponent from "./component/Banner/ProfileComponent";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfileComponent/>
      </Banner>
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

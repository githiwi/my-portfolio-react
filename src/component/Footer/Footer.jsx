import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Profile>
        <h1>Portfolio</h1>
        <div className="address">
          <h1>Address</h1>
          <p>1030 berlin Germany</p>
        </div>
        <div className="links">
            <h1>Contact me directly</h1>
            <div>
                
            </div>
        </div>
      </Profile>
      <Form></Form>
    </Container>
  );
}

export default Footer;

const Container = styled.div``;
const Profile = styled.div``;
const Form = styled.div``;

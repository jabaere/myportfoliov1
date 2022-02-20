import React from "react";
import styled from "styled-components";

const About = styled.div`
  width: 90vw;
  margin-bottom: 700px;
`;

const IconsContainerParent = styled.div``;

export const Contact = () => {
  return (
    <About id="contact">
      <h2>Contact</h2>

      <IconsContainerParent>
        <p>Email: kobriashvili@gmail.com</p>
        <p> Mobile: +995 551 10 40 11</p>
        <p>co-creator: erekle</p>
      </IconsContainerParent>
    </About>
  );
};

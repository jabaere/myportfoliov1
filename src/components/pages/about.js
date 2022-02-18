import React from "react";
import styled from "styled-components";

import {
  SiMaterialui,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiCss3,
  SiHtml5,
  SiPython,
  SiJavascript,
  SiContentful,
  SiRedux,
  SiApollographql,
  SiAframe,
  SiBitbucket,
  SiThreedotjs,
} from "react-icons/si";
import { BsCode } from "react-icons/bs";
import DownloadButton from "../layout/downloadButton";

const About = styled.div`
  width: 90vw;
  margin-top: 250px;
`;

const IconsContainer = styled.div`
 width:100%;
 display:flex;
 justify-content:space-between;
 color:antiquewhite;
 @media only screen and (max-width: 520px) {
    flex-direction: column;
    height: 300px;
    flex-wrap: wrap

 `;

const Child = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const IconsContainerParent = styled.div`
  margin-top: 20px;
`;

const data = [
  {
    iconName: "React",
    icon: <SiReact />,
  },
  {
    iconName: "React Native",
    icon: <SiReact />,
  },
  {
    iconName: "Material-ui",
    icon: <SiMaterialui />,
  },
  {
    iconName: "Node",
    icon: <SiNodedotjs />,
  },
  {
    iconName: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    iconName: "express.js",
    icon: <SiExpress />,
  },
  {
    iconName: "Graphql",
    icon: <SiGraphql />,
  },
  {
    iconName: "CSS3",
    icon: <SiCss3 />,
  },
  {
    iconName: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    iconName: "Python",
    icon: <SiPython />,
  },
  {
    iconName: "Javascript",
    icon: <SiJavascript />,
  },
  {
    iconName: "Redux",
    icon: <SiRedux />,
  },
  {
    iconName: "Three.js",
    icon: <SiThreedotjs />,
  },
];

const techniquesData = [
  {
    iconName: "Context API",
    icon: <SiReact />,
  },
  {
    iconName: "Rest API",
    icon: <BsCode />,
  },

  {
    iconName: "React-router",
    icon: <SiReact />,
  },
  {
    iconName: "Axios",
    icon: <SiAframe />,
  },
  {
    iconName: "Apollo GraphQL",
    icon: <SiApollographql />,
  },
  {
    iconName: "NoCodeAPI",
    icon: <BsCode />,
  },
  {
    iconName: "Contentful",
    icon: <SiContentful />,
  },
  {
    iconName: "Bitbucket",
    icon: <SiBitbucket />,
  },
];

export const AboutMe = () => {
  return (
    <About id="about">
      <h2>About</h2>
      <p>
        I'm jaba 31 years old. I started learn JavaScript and React
        approximately 1 years ago.
        <br />I think this is job Which I enjoy doing.
      </p>
      <DownloadButton />
      <IconsContainerParent>
        <h3>Languages/Frameworks/Libraries which Is used in my projects </h3>
        <IconsContainer id="icons-container">
          {data.map((item, index) => {
            return (
              <Child key={index}>
                {item.icon}
                <p>{item.iconName}</p>
              </Child>
            );
          })}
        </IconsContainer>
        <h3>Tools which is used in my projects</h3>
        <IconsContainer id="icons-container2">
          {techniquesData.map((item, index) => {
            return (
              <Child key={index}>
                {item.icon}
                <p style={{ width: "auto" }}>{item.iconName}</p>
              </Child>
            );
          })}
        </IconsContainer>
      </IconsContainerParent>
    </About>
  );
};

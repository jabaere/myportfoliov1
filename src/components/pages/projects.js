import React from "react";
import styled from "styled-components";
import ProjectCard from "../layout/projectCards";
//import DiscoverGeorgia from "../assets/discoverGeorgia.png";
//import UrlShortener from "../assets/urlShortener.png";
//import WorldInfo from "../assets/worldInfo.png";
//import CarAuto from "../assets/carauto.png";

const ProjectsDiv = styled.div`
  width: 90vw;
  height:10px;
`;

const ProjectsContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
color:white;
@media only screen and (max-width: 520px) {
   flex-direction: column;

   flex-wrap: wrap;
 
   justify-content:center;

`;
const Child = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 50px;
`;

const data = [
  {
    title: "Genuine Reviews",
    image: "./assets/Genuine-Reviews.png",
    description: `
          <h4>A place where you can share your online experiences with others to make the web a better place.</h4>
          <p>In this project I have Created:</p>
          <ul>
            <li>Search bar module </li>
            <li>Forgot password module </li>
            <li>Edit profile page </li>
            <li>Settings page</li>
          </ul>
        `,
    source: "",
    link: "http://www.g-reviews.com/",
  },
  {
    title: "Bind - React Native",
    image: "./assets/bind.png",
    description: `
        Fix QR scanner crash </br>
        Fix bottom Navigation bar(hide then keyboard is active and hide on chat screens)</br>
        Fix Menu Icons and It’s behavior </br>
        Fix Icons(Chinese letters) </br>
        Fix Chat Notifications
        `,
    source: "https://bind-app.com/",
    link: "https://play.google.com/store/apps/details?id=com.bind.app",
  },
  {
    title: "Discover Georgia",
    image: "./assets/discoverGeorgia.png",
    description:
      "Simple Business page where you can see information about tours in georgia",
    source: "https://github.com/jabaere/discovergeorgia",
    link: "https://jabaere.github.io/discovergeorgia/",
  },
  {
    title: "World Countries",
    image: "./assets/worldInfo.png",
    description: "REST Countries API with color theme switcher",
    source: "https://github.com/jabaere/worldinfo",
    link: "https://jabaere.github.io/worldinfo/",
  },
  {
    title: "Url Shortener",
    image: "./assets/urlShortener.png",
    description:
      "MERN project - url shortener. you can register, login and get additional data",
    source: "https://github.com/jabaere/urlshortenermern",
    link: "https://mernshortener.herokuapp.com/",
  },
  {
    title: "Business site",
    image: "./assets/carauto.png",
    description:
      "Business site for Car buying services. site is connected google sheets via nocode api and send's all data there",
    source: "https://github.com/jabaere/carautousa",
    link: "https://jabaere.github.io/carautousa/",
  },
  {
    title: "E-commerce Platform",
    image: "./assets/ecom2.png",
    description:
      "E-commerce Platform, It's a web page model of online shop. you can select items, add them to the cart remove them from it and checkout.",
    source: "https://github.com/jabaere/ecommercefront",
    link: "",
  },
  {
    title: "Landing page",
    image: "./assets/landing.png",
    description: "Landing page",
    source: "https://github.com/jabaere/elltask",
    link: "https://jabaere.github.io/elltask/",
  },
];

export const Projects = () => {
  return (
    <ProjectsDiv id="projects">
      <h2>Here is some of my Projects</h2>

      <ProjectsContainer>
        {data.map((item, key) => {
          return (
            <Child key={key}>
              <ProjectCard
                title={item.title}
                image={item.image}
                description={item.description}
                source={item.source}
                link={item.link}
              />
            </Child>
          );
        })}
      </ProjectsContainer>
    </ProjectsDiv>
  );
};

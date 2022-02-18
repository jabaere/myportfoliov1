//model license
/*
Model Information:
* title:	Silent Ash
* source:	https://sketchfab.com/3d-models/silent-ash-bc44272e8c1047148b33c913e659fcfa
* author:	maxpanysh (https://sketchfab.com/maxpanysh)

Model License:
* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
* requirements:	Author must be credited. Commercial use is allowed.
---------------------------------------------------------------------
Model Information:
* title:	Basketball
* source:	https://sketchfab.com/3d-models/basketball-4b5ae9b70251441a896a90fd14a79f66
* author:	Alihan (https://sketchfab.com/Dare0)

Model License:
* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
* requirements:	Author must be credited. Commercial use is allowed.
*/

import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import { Model } from "./components/model/Model";
import HtmlContent from "./components/htmlContent";
import { Html } from "@react-three/drei";
import { Block } from "./components/layout/block";
import state from "./components/store/state";
import { AboutMe } from "./components/pages/about";
import { Projects } from "./components/pages/projects";
import Loading from "./components/layout/loading";
import Loading2 from "./components/layout/loader";
import { Contact } from "./components/pages/contact";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const PText = styled.p`
  text-align: center;
  color: orange;
`;
const H1Text = styled.h1`
  text-align: center;
  color: orange;
  font-size: 38px;
  font-family: "Segoe UI", Roboto;
`;

const HtmlContentChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -40%, 0);
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: 380px;
`;
const Warning = styled.p`
  color: red;
  font-size: 14px;
`;
//#f15946;
//#636567
//#571ec1

function App() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();

  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <CanvasContainer id="fullPage">
      <Suspense fallback={<Loading type="cylon" color="orange" />}>
        <Canvas
          camera={{ position: [0, 0, 20], fov: 15, near: 10, far: 1000 }}
          dpr={[1, 1.5]}
          gl={{ alpha: false, antialias: true }}
          onCreated={({ gl, events }) => {
            gl.setClearColor("white");
            gl.toneMappingExposure = 1;
            gl.toneMappingWhitePoint = 1;

            // Export canvas events, we will put them onto the scroll area
            setEvents(events);
          }}
          onUpdate={(c) => c.updateProjectionMatrix()}
          resize={2}
        >
          <color
            attach="background"
            args={["#121C1A"]} //'#191920'
          />

          <Block factor={1.5} offset={0}>
            <Model
              modelPath="./ball/scene.gltf"
              positionX={0}
              positionY={-1}
              positionZ={1}
              scale={0.5}
              name="ball"
            />
            <Model
              modelPath="./ball2/scene.gltf"
              positionX={-3.5}
              positionY={-4}
              positionZ={4}
              scale={0.6}
              name="ball2"
            />
            <Model
              modelPath="./anime/scene.gltf"
              positionX={2}
              positionY={-4}
              positionZ={1}
              scale={1}
              name="anime"
            />
            <HtmlContent>
              <HtmlContentChild className="htmlContent">
                <div className="container">
                  <div id="title">
                    <H1Text>Hello, I'm JABA</H1Text>
                    <PText>MERN stack developer</PText>
                    <Warning>Please Scroll Down</Warning>
                  </div>
                </div>
              </HtmlContentChild>
            </HtmlContent>
          </Block>
          <Block factor={2} offset={1}>
            <Html center portal={domContent}>
              <AboutMe />
            </Html>
          </Block>

          <Block factor={3} offset={4.8} id="projects">
            <Html center portal={domContent}>
              <Projects />
            </Html>
          </Block>
          <Block factor={5} offset={8.2} id="contact">
            <Html center portal={domContent}>
              <Contact />
            </Html>
          </Block>
        </Canvas>
      </Suspense>
      <div
        className="scrollArea"
        ref={scrollArea}
        onScroll={onScroll}
        {...events}
      >
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </CanvasContainer>
  );
}

export default App;

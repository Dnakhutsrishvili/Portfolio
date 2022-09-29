import "./App.css";
import GlobalStyle from "./Components/globalStyles";
import Header from "./Components/Header";
import Paragraph from "./Components/Paragraph";
import Secondpage from "./Components/SecondPage";
import Projects from "./Components/Projects";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

function App() {
  //function for navigation
  const projects = useRef(null);
  const aboutMe = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //state for form
  const [formShow, setFormShow] = useState(false);

  //responsive state
  const [width, setWindowWidth] = useState(0);

  //using global width to change responsive state
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    state: width < 1300,
  };

  console.log(responsive.state);

  return (
    <>
      <GlobalStyle />
      {formShow && <Form state={setFormShow}></Form>}
      <Header
        state={setFormShow}
        click={scrollToSection}
        navme={aboutMe}
        nav={projects}
      ></Header>
      <ScrollContainer>
        {!responsive.state ? (
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>
              <Paragraph></Paragraph>
            </Animator>
          </ScrollPage>
        ) : (
          <Paragraph></Paragraph>
        )}
        {!responsive.state ? (
          <div ref={aboutMe}>
            <ScrollPage page={1}>
              <Animator
                animation={
                  !responsive.state &&
                  batch(FadeIn(), MoveIn(-1200, 0), Fade(), MoveOut(-1000, 0))
                }
              >
                <Secondpage></Secondpage>
              </Animator>
            </ScrollPage>
          </div>
        ) : (
          <Secondpage></Secondpage>
        )}
        {!responsive.state ? (
          <div ref={projects}>
            <ScrollPage page={2}>
              <Animator
                animation={
                  !responsive.state && batch(FadeIn(), MoveIn(-1200, 0))
                }
              >
                <Projects state={setFormShow}></Projects>
              </Animator>
            </ScrollPage>
          </div>
        ) : (
          <Projects state={setFormShow}></Projects>
        )}
      </ScrollContainer>
      <Footer state={setFormShow}></Footer>
    </>
  );
}

export default App;

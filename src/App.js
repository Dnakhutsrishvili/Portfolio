import "./App.css";
import GlobalStyle from "./Components/globalStyles";
import Header from "./Components/Header";
import Paragraph from "./Components/Paragraph";
import Secondpage from "./Components/SecondPage";
import Projects from "./Components/Projects";
import Form from "./Components/Form";

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
import { useState } from "react";

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
  console.log(formShow);
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
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), MoveOut(-1000, 0))}>
            <Paragraph></Paragraph>
          </Animator>
        </ScrollPage>
        <div ref={aboutMe}>
          <ScrollPage page={1}>
            <Animator
              animation={batch(
                FadeIn(),
                MoveIn(-1200, 0),
                Fade(),
                MoveOut(-1000, 0)
              )}
            >
              <Secondpage></Secondpage>
            </Animator>
          </ScrollPage>
        </div>
        <div ref={projects}>
          <ScrollPage page={2}>
            <Animator animation={batch(FadeIn(), MoveIn(-1200, 0))}>
              <Projects></Projects>
            </Animator>
          </ScrollPage>
        </div>
      </ScrollContainer>
    </>
  );
}

export default App;

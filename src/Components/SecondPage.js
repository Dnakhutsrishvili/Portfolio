import classes from "./SecondPage.module.css";
import me from "../images/img.jpg";

const Secondpage = () => {
  return (
    <div className={classes.conteiner}>
      <div className={classes.textConteiner}>
        <p className={classes.title}>About Me</p>
        <p className={classes.text}>
          Hello my name is David Nakhutsrishvili and i enjoy building things on
          web.
          <br /> My interest in Web development started in 2020 when first i
          found out the unllimited possobilities of this filed.
          <br /> In my learning path I finished several courses online and
          Tbilisi Bootcamp, for HTML, CSS ,Javascript and React, At the moment
          I'm groving my skills and searching the first developer Job.
        </p>
        <p className={classes.text1}>Scroll down for Projects</p>
      </div>
      <div>
        <img className={classes.img} src={me} alt="me"></img>
      </div>
    </div>
  );
};

export default Secondpage;

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
          <br />
          <br /> I first became interested in web development in 2020 after
          learning about the virtually endless possibilities in this industry.
          <br />
          <br />
          In my educational journey, I completed numerous online and Tbilisi
          Bootcamp classes in HTML, CSS, Javascript, and React. At the moment,
          I'm honing my abilities and looking for my first developer job.
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

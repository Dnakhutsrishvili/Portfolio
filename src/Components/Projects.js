import classes from "./Projects.module.css";
import redberry1 from "../images/redberry1.png";
import redberry from "../images/redberry.png";
import redberry2 from "../images/redberry2.png";
import redberry3 from "../images/redberry3.png";
import add from "../images/add.png";
import expense from "../images/expense.png";
import Footer from "./Footer";

const Projects = (props) => {
  return (
    <div ref={props.nav} className={classes.container}>
      <div className={classes.firstRow}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://musical-sable-9ef8c0.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={redberry1} alt="#"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://deft-faun-d176c0.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={redberry} alt="#"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://relaxed-lamport-b9df3d.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={redberry2} alt="#"></img>
        </a>
      </div>
      <div className={classes.firstRow}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jovial-taffy-734343.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={redberry3} alt="#"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://heartfelt-torrone-350cb6.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={expense} alt="#"></img>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://endearing-bunny-b9bf5b.netlify.app/"
          className={classes.link}
        >
          <img className={classes.img} src={add} alt="#"></img>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Projects;

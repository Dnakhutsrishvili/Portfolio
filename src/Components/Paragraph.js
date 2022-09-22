import classes from "./Paragraph.module.css";

const Paragraph = () => {
  return (
    <div className={classes.ParagraphContainer}>
      <p className={classes.paragraph}>
        &nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Paragraph;

import classes from "./Form.module.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
import linkldin from "../images/linkdin.png";
import github from "../images/github.png";

const Form = (props) => {
  return (
    <>
      <div className={classes.conteiner}>
        <p className={classes.title}>Conatact Me</p>
        <form
          className={classes.formParent}
          action="https://formsubmit.co/dtNakhutsrishvili@gmail.com"
          method="POST"
        >
          <input
            placeholder="Say Hello"
            className={classes.text}
            type="text"
            name="name"
            required
          />
          <input
            placeholder="your Email"
            className={classes.email}
            type="email"
            name="email"
            required
          />
          <button className={classes.btnSend} type="submit">
            Send
          </button>
          <div className={classes.contactInfoParent}>
            <div className={classes.logo}>
              <img className={classes.phone} alt="phone" src={phone}></img>
              <img className={classes.phone} alt="email" src={email}></img>
              <img className={classes.phone} alt="linkdin" src={linkldin}></img>
              <img className={classes.phone} alt="github" src={github}></img>
            </div>
            <div className={classes.logo}>
              <p className={classes.links}>+995-555-55-03-41</p>
              <p className={classes.links}>Dtnakhutsrishvili@gmail.com</p>
              <a href="https://bit.ly/3Sqg64I" target="_blank" rel="noreferrer">
                <p className={classes.links}>I am the Link</p>
              </a>
              <a href="https://bit.ly/3dzIMJH" target="_blank" rel="noreferrer">
                <p className={classes.links}> Me too</p>
              </a>
            </div>
          </div>
        </form>

        <button
          onClick={() => {
            props.state(false);
          }}
          className={classes.btnClose}
        >
          Close
        </button>
      </div>
    </>
  );
};
export default Form;

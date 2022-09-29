import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footerParent}>
      <div>
        <p className={classes.a}>Designed & Built by Davit Nakhutsrishvili</p>
      </div>
      <div>
        <ul className={classes.styleMenu}>
          <a
            className={classes.a}
            href="https://bit.ly/3dzIMJH"
            target="_blank"
            rel="noreferrer"
          >
            <li>Github</li>
          </a>
          <li
            className={classes.a}
            onClick={() => {
              props.state(true);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

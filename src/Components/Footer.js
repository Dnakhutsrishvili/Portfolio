import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footerParent}>
      <div>
        <p>Designed & Built by Davit Nakhutsrishvili</p>
      </div>
      <div>
        <ul>
          <li>Main</li>
          <li>Github</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

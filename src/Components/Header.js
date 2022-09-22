import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.Headerbox}>
        <div className={classes.HeaderParent}>
          <div className={classes.row}>
            <p
              onClick={() => {
                props.click(props.navme);
              }}
              className={classes.name}
            >
              Davit Nakhutsrishvili
            </p>
            <p className={classes.developer}>Web Developer</p>
          </div>
        </div>
        <div className={classes.menu}>
          <ul className={classes.menuParent}>
            <li
              onClick={() => {
                props.click(props.nav);
              }}
            >
              Projects
            </li>

            <li
              onClick={() => {
                props.state(true);
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;

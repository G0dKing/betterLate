import {} from "react";
import "../css/style.css";
import logo from "../assets/logo.png";
import Copyright from "../components/Copyright";

const Home = () => {
  return (
    <>
      <div className="overlay"></div>

      <div className="header">
        <div className="banner">
          <img src={logo} alt="BetterLate" className="logo"></img>
          <div className="navigation">
            <ul>
              <li>
                <a href="about.html">ABOUT</a>
              </li>
              <li>
                <a href="nearby">BROWSE</a>
              </li>
              <li>
                <a href="register">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
          <div className="hero-container">
            <h2>STOP CHOOSING. START EATING.</h2>
          </div>

          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;randomize&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;randomize&nbsp;
            </span>
          </button>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Home;

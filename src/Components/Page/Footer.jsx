import React from "react";
import Fade from "react-reveal";

export const Footer = (props) => {
  if (!props.data) return null;

  console.log(props.data.social);

  const networks = props.data.social.map((networks) => {
      return (
          <li key={networks.name}>
              <a href={networks.url}>
                  <i className={networks.className}></i>
              </a>
          </li>
      )
  });

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 Nordic Giant</li>
              <li>
                Design by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

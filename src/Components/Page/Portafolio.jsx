import React from "react";
import Fade from "react-reveal";

let id = 0;

export const Portafolio = (props) => {
  if (!props.data) return null;

  const projects = props.data.projects.map(() => {
    const projectImage = "images/portafolio/" + projects.image;
    return (
      <div key={id++} className="columns portafolio-item">
        <div className="item-wrap">
          {/* <Zmage alt={projects.title} src={projectImage} /> */}
          <div style={{ textAlign: "center" }}>{projects.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {props.data.projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

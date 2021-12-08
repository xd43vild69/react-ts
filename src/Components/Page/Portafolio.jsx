import React from "react";
import Fade from "react-reveal";
import Zmage from "react-zmage";
import a from "../../images/portafolio/01.jpg"

let id = 0;

export const Portafolio = (props) => {
  
  if (!props.data) return null;

  const projects = props.data.projects.map((project) => {
    let id = 0;
    const projectImage = "images/portafolio/" + project.image;
    console.log(projectImage);
    return (
      <div key={id++} className="columns portafolio-item">
        <div className="item-wrap">
          <Zmage alt={project.title} src={a} />          
          <div style={{ textAlign: "center" }}>{project.title}</div>
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
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

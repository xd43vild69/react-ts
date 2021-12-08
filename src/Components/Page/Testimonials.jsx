import React from "react";

export const Testimonials = (props) => {
  const testimonials = props.data.testimonials.map(() => {
    return (
      <li key={testimonials.user}>
        <blockquote>
          <p>
            {testimonials.text}
            <cite>{testimonials.user}</cite>
          </p>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{props.testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/img Microsoft.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Game of Life  🎉",
    description:
      "My creation of the Game of Life, which is based on the creation of new lives based on the initial lives, designed in Java.",
    url: "https://github.com/ArielM457/Proyecto_GameOfLife/tree/master",
  },
  {
    title: "Ecomerse - Buzzo ",
    description:
      "The creation of an app for an electronic commerce for products that are friendly to the environment, being portable in ecological deliveries, seen by the buyer and consumer. Designed in neat beans, using java web implementing Html, css, Javascript, java and databases in mysql",
    url: "https://github.com/ArielM457/e-comerse.git",
  },
  {
    title: "Initial ordering for chess pieces ",
    description:
      "The creation of the order application for chess pieces, applying ordering algorithms and good practices designed in Java.",
    url: "https://github.com/ArielM457/Ordering---Chess-Game.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/fondoMicrosoft3.jpg";

const imageAltText = "Font representative";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a software engineering student at Jala University, I learn daily about technologies such as programming, databases and operating systems and I am passionate about uniting them to create something even better and that causes easier interaction and a positive impact for users.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "  Software development",
  "Management of Linux operating systems, WIndows, Linux server Windows server",
  "Management and administration of relational and non-relational databases",
  "Web page design with Java web, tom cat",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
 "The life goals and the possibilities that my environment offers me drive me every day to create innovations that lead technology to even greater advancement. My continuous learning of programming, databases and operating systems are my main tools to have the solid foundations to create new technologies based on those we already have. My daily work in projects shows the results that in turn take the advanced form that I will achieve Phrase that I live by for my work: Technology is the engine of innovation and has the power to change the world. - Tim Cooka";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

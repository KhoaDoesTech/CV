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
import image from "../images/pantone.webp";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm studying Information Technology at HCMUTE with a focus on backend development";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = {
  Languages: "JavaScript, Python, Java, TypeScript",
  DBMS: "SQL (MySQL, SQL Server), NoSQL (MongoDB, Redis)",
  Frameworks: "Express, Spring MVC",
  "Developer Tools": "Git, Google Cloud Platform",
  Libraries: "Jest, Moongose, Nodemailer, Cors, Axios, Dotenv",
};

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Passionate about problem-solving and software efficiency, I'm dedicated to mastering backend technologies to create impactful solutions in the tech industry";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#85677B",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 1, // columns: "2 200px",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {Object.entries(skillsList).map(([category, skills]) => (
            <li key={category}>
              <strong>{category}</strong>: {skills}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

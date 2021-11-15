import React from 'react';
import coverImage from '../../assets/about_me.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="my-2">
        <p>
          I'm a new web developer looking for a job!
        </p>
      </div>
    </section>
  );
}

export default About;
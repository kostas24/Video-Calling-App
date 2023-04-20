import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cd68yqw",
        "template_q5hq01s",
        form.current,
        "7EfzjspcRVW6tVC84"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message has been sent!");
  };

  return (
    <article className="HomePageDiv">
      <h1 className="heading" style={{ fontSize: "40px" }}>
        Pseudostarter
      </h1>
      <p style={{ fontSize: "20px" }}>
        Welcome to Pseudo Starter where you meet with various people to find and
        create your dream projects sooner. Create a Calendar, Video Calls, and
        Your Team right here! Our purpose is to help bring connections to people
        and motivate them into pursuing their dream position as an aspiring
        developer. Our purpose is to help bring connections to people and
        motivate them into pursuing their dream position as an aspiring
        developer. We hope for bring them opportunities to communicate and build
        relationships as that is a great investment for dream jobs or
        internships.
      </p>
      <h2 style={{ fontSize: "30px", color: "#001f3f" }}>Meet the Team!</h2>
      <section>
        <img
          className="profile"
          style={{ width: "180px" }}
          src={require("../images/Anthony.jpg")}
        />
        <p style={{ fontSize: "18px" }}>
          Hello! My name is Anthony Nino De Guzman and I too am also an aspiring
          Web Developer in hopes of landing a company position in my field soon.
          As someone that loves to give constant support, I would love to give
          people an opportunity to connect, brainstorm, and create miracles
          together as a team. To be one that can help give that makes me smile
          and feel proud of myself.
        </p>
        <img
          className="profile"
          style={{ width: "180px" }}
          src={require("../images/Kos.jpg")}
        />
        <p style={{ fontSize: "19px" }}>
          Hey there! My name is Konstantinos Georgiou and I am pursuing a
          software engineering career after college! I always loved the idea
          about having my own platform and this is the closest i’ve been to
          having one! Working with others is an essential skill and I hope this
          app will be beneficial to all of you.
        </p>
      </section>
      <h2 style={{ color: "#001f3f" }}>Got Something To Say?</h2>
      <p style={{ fontSize: "19px" }}>
        Feel free to message us and ask us anything you need. We'll be sure to
        reply as soon as we can!
      </p>
      <form ref={form} onSubmit={sendEmail} className="emailForm">
        <input required placeholder="Your Name" name="name" type="text" />
        <input required placeholder="Email" name="email" type="email" />
        <textarea required placeholder="Message" name="message" />
        <button className="sendEmail">Send</button>
      </form>
    </article>
  );
};

export default Home;

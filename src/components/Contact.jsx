import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

function Contact() {
  const [isPending, setIsPending] = useState(false);

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    setIsPending(true);
    emailjs.sendForm("service_nw4sh4t", "template_hh0tkze", form.current).then(
      (Response) => {
        console.log("SUCCESS!", Response.status, Response.text);
        alert("Email sent successfully");
        form.current.reset();
        setFormdata({ name: "", email: "", message: "" });
        setIsPending(false);
      },
      (error) => {
        console.log("Failed!", error);
        alert("Failed to send Email. Please try Again");
        setIsPending(false);
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="heading__container">
        <h2 className="heading">Let's Build Something Great Together</h2>
        <h3 className="sub__heading">
          Got an idea or just want to say hi? Drop me a message below.
        </h3>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        name="myForm"
        className="form"
        disabled={isPending}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formdata.name}
          onChange={handleChange}
          className="name__input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handleChange}
          className="email-input"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formdata.message}
          onChange={handleChange}
          required
          className="message-input"
        />
        {isPending ? (
          <button type="button" disabled>
            Sending...
          </button>
        ) : (
          <button type="submit">Send Message </button>
        )}
      </form>
      <ul className="social__links-container">
        <li className="social__links">
          <a href="https://github.com/noelams" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              width="35"
              height="35"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>

        <li className="social__links">
          <a
            href="https://www.linkedin.com/in/inalegwu-noel-ali-030049239/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              width="35"
              height="35"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
        <li className="social__links">
          <a href="mailto:noelams@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              width="35"
              height="35"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </li>
        <li className="social__links">
          <a href="https://x.com/Alinoel17" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

//https://github.com/noelams/chessTimer

export default Contact;

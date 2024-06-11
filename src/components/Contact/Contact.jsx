
import React from "react";

import { getImageUrl } from '../../utlis';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="deepakgupta75066@gmail.com">deepakgupta75066@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/deepak-gupta-46b171285">linkedin.com/deepakgupta</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/deepakgupta75">github.com/deepakgupta75</a>
        </li>
      </ul>
    </footer>
  );
};
   


export default Contact

import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Made by
        <a target={"_blank"} href="https://github.com/vTanchev">
          {" "}
          Vasko Tanchev
        </a>
      </p>
    </footer>
  );
};

export default Footer;

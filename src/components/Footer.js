import React from "react";
import logo from "../logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <img src={logo} alt="logo" srcset="" />
          &#169; 2022 GitHub, Inc.
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="./">Terms</a>
            </li>
            <li>
              <a href="./">Privacy</a>
            </li>
            <li>
              <a href="">Security</a>
            </li>
            <li>
              <a href="./">Status</a>
            </li>
            <li>
              <a href="./">Docs</a>
            </li>
            <li>
              <a href="./">Contact GitHub</a>
            </li>
            <li>
              <a href="./">Pricing</a>
            </li>
            <li>
              <a href="./">API</a>
            </li>
            <li>
              <a href="./">Training</a>
            </li>
            <li>
              <a href="./">Blog</a>
            </li>
            <li>
              <a href="./">About</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

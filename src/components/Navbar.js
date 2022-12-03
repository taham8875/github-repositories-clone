import React from "react";
import "./Navbar.css";
import logo from "../logo.png";
import avatar from "../avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faBookOpen,
  faProjectDiagram,
  faBoxArchive,
  faCaretDown,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <img src={logo} alt="logo" className="logo" />
        <label>
          <input id="search" type="text" placeholder="Enter username.." />
          <span>/</span>
        </label>
        <ul>
          <li>Pulls</li>
          <li>Issues</li>
          <li>Codespaces</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
        <FontAwesomeIcon
          className="notifications"
          icon={faBell}
        ></FontAwesomeIcon>
        <div className="more">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
        <div className="photo-drop-down">
          <img src={avatar} alt="avatar" />
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
      </nav>
      <nav className="secondary-nav">
        <div className="container">
          <ul>
            <li>
              <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              Overview
            </li>
            <li className="active">
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Repositories
            </li>
            <li>
              <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
              Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon> Package
            </li>
            <li>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>Stars
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

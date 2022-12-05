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
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos, fetchUsers } from "../app/user/userSlice";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleKeyDown(event) {
    console.log(user);
    if (event.key === "Enter") {
      dispatch(fetchUsers(event.target.value));
      dispatch(fetchUserRepos(event.target.value));
    }
  }
  return (
    <>
      <nav className="main-nav">
        <img src={logo} alt="logo" className="logo" />
        <label>
          <input
            id="search"
            type="text"
            placeholder="Enter username.."
            onKeyDown={handleKeyDown}
          />
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

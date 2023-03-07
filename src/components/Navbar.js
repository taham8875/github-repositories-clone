import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../logo.svg";
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
  const inputRef = useRef();

  const keyUpHandler = (event) => {
    if (event.key === "/") {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", keyUpHandler);
  });

  function handleKeyDown(event) {
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
            ref={inputRef}
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
        {user.user.avatar_url && (
          <div className="photo-drop-down">
            <img src={user.user.avatar_url} alt="avatar" />
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </div>
        )}
      </nav>
      <nav className="secondary-nav">
        <div className="container">
          <ul>
            <li>
              <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
              Overview
            </li>
            <li className="active">
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Repositories{" "}
              {user.userRepos.length ? (
                <span className="numberOfRepositories">
                  {user.userRepos.length}
                </span>
              ) : null}
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

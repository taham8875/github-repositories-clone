import React from "react";
import "./SideBar.css";
import avatar from "../avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faUserGroup,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="user-avatar">
          <img src={avatar} alt="" srcset="" />
          <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
        </div>
        <h3>Taha Ahmed</h3>
        <p className="username">taham8875</p>
        <button>Edit profile</button>
        <div className="info">
          <p>
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-white-50"
            ></FontAwesomeIcon>
            <span>15</span> <span className="text-white-50">followers</span> ·{" "}
            <span>56</span> <span className="text-white-50">following</span>
          </p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white-50"
            ></FontAwesomeIcon>
            taha.m8875@gmail.com
          </p>
          <p>
            <FontAwesomeIcon
              icon={faLink}
              className="text-white-50"
            ></FontAwesomeIcon>
            https://wa.me/qr/4JLCV7XFJFPPG1
          </p>
        </div>
      </div>
    </>
  );
}

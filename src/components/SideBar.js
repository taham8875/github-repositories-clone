import React, { useEffect } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faUserGroup,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../app/user/userSlice";

export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="user-avatar-name-username">
          <div className="user-avatar">
            <img src={user.user.avatar_url} alt="" srcset="" />
            <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
          </div>
          <div className="user-name-username">
            <h3>{user.user.name}</h3>
            <p className="username">{user.user.login}</p>
          </div>
        </div>
        <button>Edit profile</button>
        <div className="info">
          <p>
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-white-50"
            ></FontAwesomeIcon>
            <span>{user.user.followers}</span>{" "}
            <span className="text-white-50">followers</span> ·{" "}
            <span>{user.user.following}</span>{" "}
            <span className="text-white-50">following</span>
          </p>
          {user.user.email && (
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white-50"
              ></FontAwesomeIcon>
              {user.user.email}
            </p>
          )}
          {user.user.blog && (
            <p>
              <FontAwesomeIcon
                icon={faLink}
                className="text-white-50"
              ></FontAwesomeIcon>
              {user.user.blog}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

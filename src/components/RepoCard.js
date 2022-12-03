import React from "react";
import "./RepoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import languagesColors from "../languagesColors.json";

export default function RepoCard(props) {
  // let taha = [];
  // taha = props.user.map((element) => {
  //   return element.name;
  // });
  // console.log(taha);
  // // console.log("taha");
  // // console.log(taha);

  return (
    <>
      <div className="repo-card">
        <div className="about-repo">
          <h2>
            <a href="./">{props.name}</a>{" "}
            <span>{props.private ? "Private" : "Public"}</span>
          </h2>
          <p className="repo-description">{props.description}</p>
          <div className="repo-data">
            {props.language && (
              <span
                className="language-color"
                style={{ backgroundColor: languagesColors[props.language] }}
              ></span>
            )}
            {props.language && (
              <span className="language">{props.language}</span>
            )}
            <span>Updated on {props.updated_at}</span>
          </div>
        </div>
        <button className="star-button">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Star
        </button>
      </div>
    </>
  );
}

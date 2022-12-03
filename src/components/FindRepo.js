import React from "react";
import "./FindRepo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function FindRepo() {
  return (
    <>
      <div className="find-repo">
        <input
          type="text"
          placeholder="Find a repository..."
          className="search-repo"
        />
        <button className="filter-repo">
          Type <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </button>
        <button className="filter-repo">
          Language <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </button>
        <button className="filter-repo">
          Sort <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </button>
        <button className="new-repo">
          <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> New
        </button>
      </div>
    </>
  );
}

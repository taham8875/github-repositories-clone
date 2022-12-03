import React, { useState, useEffect } from "react";
import "./Repositories.css";
import RepoCard from "./RepoCard";
import FindRepo from "./FindRepo";

export default function Repositories() {
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/taham8875/repos")
      .then((response) => response.json())
      .then((data) => setUserRepos(data));
  }, []);

  return (
    <>
      <div className="repositories">
        <FindRepo />
        {userRepos.map((element) => {
          return (
            <RepoCard
              name={element.name}
              description={element.description}
              private={element.private}
              language={element.language}
              updated_at={new Date(element.updated_at).toDateString()}
            />
          );
        })}
      </div>
    </>
  );
}

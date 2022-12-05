import React, { useEffect } from "react";
import "./Repositories.css";
import RepoCard from "./RepoCard";
import FindRepo from "./FindRepo";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepos } from "../app/user/userSlice";

export default function Repositories() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserRepos());
  }, []);

  return (
    <>
      <div className="repositories">
        <FindRepo />
        {Array.from(user.userRepos).map((element) => {
          return (
            <RepoCard
              key={element.id}
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

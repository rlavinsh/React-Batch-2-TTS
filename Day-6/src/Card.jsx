import React from "react";

const Card = ({ name, email, course, skills, getData }) => {
  return (
    <>
      <div className="card">
        <h2>Name:{name}</h2>
        <h3>Email:{email}</h3>
        <h4>Course:{course}</h4>
        <h4>
          Skills:
          {skills.map((skill, index) => {
            return (
              <ul key={index}>
                <li>{skill}</li>
              </ul>
            );
          })}
        </h4>
        <button
          onClick={() => {
            getData({ name, email, course });
          }}
        >
          Get Data
        </button>
      </div>
    </>
  );
};

export default Card;

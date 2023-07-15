import React from "react";

const PersonDetails = ({ employees }) => {
  const { title, dates, duties, company } = employees;
  return (
    <div className="person-details">
      <h2 className="job-title">{title}</h2>
      <div className="company-name">{company}</div>
      <p className="dates">{dates}</p>
      <ul className="duties">
        {duties.map((item, index) => {
          return (
            <li key={index} className="duty">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonDetails;

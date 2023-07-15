import React from "react";

const Person = ({ id, company, className, onClick }) => {
  return (
    <li className={`tab ${className}`} onClick={() => onClick(id)}>
      {company}
    </li>
  );
};

export default Person;

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Person from "./Person";
import PersonDetails from "./PersonDetails";

const usedUrl = "https://course-api.com/react-tabs-project";

const MainTab = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEmployees(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData(usedUrl);
  }, []);
  const handleClick = (index) => {
    setCurrentItem(index);
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className="tabs-project">
      <div className="container">
        <ul className="filters">
          {employees.map((item, index) => {
            const { id, company } = item;
            return (
              <Person
                key={id}
                id={index}
                company={company}
                className={index === currentItem && "active"}
                onClick={handleClick}
              />
            );
          })}
        </ul>
        <PersonDetails employees={employees[currentItem]} />
      </div>
    </div>
  );
};

export default MainTab;

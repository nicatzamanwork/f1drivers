import React, { useEffect, useState } from "react";

const QueryResults = () => {
  const [drivers, setDrivers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch(`http://ergast.com/api/f1/drivers.json?limit=30&offset=30`)
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data.MRData);
      });
  };

  console.log(drivers);

  return (
    <div>
      <h1>Query Results</h1>
      <div>
        <table className="w3-table-all">
          <thead className="w3-light-grey">
            <tr>
              <th>Series</th>
              <th>Page</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{drivers.series}</td>
              <td>{count} of 29 </td>
              <td>{drivers.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryResults;

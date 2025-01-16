import React from "react";
import "../styles/table.css";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Input Column</th>
            <th>Action Column</th>
            <th>Enrich Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.input}</td>
              <td>{row.action}</td>
              <td>{row.enrich}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

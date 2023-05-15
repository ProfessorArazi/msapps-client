import React from "react";
import "./Table.css";

export const Table = ({ data }) => {
  const headers = Object.keys(data);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr key={data.id}>
          {headers.map((header) => (
            <td key={header}>{data[header]}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

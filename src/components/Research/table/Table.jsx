import React from 'react';
import './Table.css';
const Table = ({ data, columnData }) => {
  return (
    <div className="table-container">
      <table className="funded-projects-table">
        <thead>
          <tr>
            <th>{columnData[0]}</th>
            <th>{columnData[1]}</th>
            <th>{columnData[2]}</th>
            <th>{columnData[3]}</th>
            <th>{columnData[4]}</th>
            <th>{columnData[5]}</th>
            <th>{columnData[6]}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnData.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

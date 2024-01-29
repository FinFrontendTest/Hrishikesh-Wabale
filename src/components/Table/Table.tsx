import React from "react";
import "./Table.css";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import Constants from "../../constant.ts";

const Table = (props) => {
  // Methods
  const getWeekdays = (days) => {
    const weekdays = Constants.Table.weekdays;
    let dayString = "";
    weekdays.forEach((day, index) => {
      if (days[index]) {
        dayString = dayString.length > 0 ? dayString + ", " + day : day;
      }
    });
    return dayString;
  };

  return (
    <div className="container">
      <h2>{Constants.Table.title}</h2>
      <table className="table">
        <thead>
          <tr className="table-row">
            <th className="row-head-narrow">
              {Constants.Table.tableHeader.srNo}
            </th>
            <th className="row-head-wide">
              {Constants.Table.tableHeader.name}
            </th>
            <th className="row-head-narrow">
              {Constants.Table.tableHeader.contact}
            </th>
            <th className="row-head-wide">
              {Constants.Table.tableHeader.email}
            </th>
            <th className="row-head-wide">
              {Constants.Table.tableHeader.weekday}
            </th>
            <th className="row-head-narrow">
              {Constants.Table.tableHeader.gender}
            </th>
            <th className="row-head-narrow">
              {Constants.Table.tableHeader.dob}
            </th>
            <th className="row-head-narrow">
              {Constants.Table.tableHeader.action}
            </th>
          </tr>
        </thead>
        {props.data.map((val, key) => {
          return (
            <tbody key={key}>
              <tr key={key}>
                <td className="row-head-narrow">{key + 1}</td>
                <td className="row-head-wide">{val.name}</td>
                <td className="row-head-narrow">{val.contact}</td>
                <td className="row-head-wide">{val.email}</td>
                <td className="row-head-wide">{getWeekdays(val.weekday)}</td>
                <td className="row-head-narrow">{val.gender}</td>
                <td className="row-head-narrow">{val.dob}</td>
                <td className="row-head-action">
                  <button
                    className="action"
                    onClick={() => props.displayModal(key)}
                  >
                    <img src={Edit} alt={Constants.Table.actionEdit} />
                  </button>
                  <button
                    className="action"
                    onClick={() => props.onDelete(key)}
                  >
                    <img src={Delete} alt={Constants.Table.actionDelete} />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

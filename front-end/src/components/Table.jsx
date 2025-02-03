import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntries } from "../redux/formSlice";
import '../styles/entry-table.css'

const Table = () => {
  const dispatch = useDispatch();
  const { entries, status, error } = useSelector((state) => state.form);

  useEffect(() => {
    console.log(entries)//analyzing purposes
    if (status === "idle") {
      dispatch(fetchEntries());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="table-container">
      <h2>Entries</h2>
      <table className="entry-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="entry-row">
              <td>{entry.name}</td>
              <td>{entry.age}</td>
              <td>{entry.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

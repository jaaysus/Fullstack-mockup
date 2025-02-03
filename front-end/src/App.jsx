import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import './app.css';
const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Register Form</h1>
      <Form />
      <Table />
    </div>
  );
};

export default App;

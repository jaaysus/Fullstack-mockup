import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../redux/formSlice";
import '../app.css'
const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", age: "", title: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.title) {
      try {
        await dispatch(addEntry(formData)).unwrap();
        setFormData({ name: "", age: "", title: "" });
      } catch (error) {
        console.error("Failed to add entry: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Entry</button>
    </form>
  );
};

export default Form;

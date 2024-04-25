import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProducts } from "../../redux/Actions";
import Swal from 'sweetalert2';
import "./CreateProducts.css";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: 0,
    isFree: false,
    creationTime: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || formData.price < 0 || formData.stock < 0) {
        console.log("Datos inválidos");
        return;
    }

    const { name, price, isFree, stock, creationTime } = formData;

    dispatch(postProducts({ name, price, isFree, stock, creationTime }))
        .catch((error) => {
            console.error("Error al crear el producto:", error);
        });
  };

  return (
    <div className="form-container">
      <h1> Creation form </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isFree" className="form-label">
            Free
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="isFree"
            name="isFree"
            checked={formData.isFree}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="creationTime" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            id="creationTime"
            name="creationTime"
            value={formData.creationTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Create Product
          </button>
          <a href="/home" target="_self">
            <button type="button" className="btn btn-outline-primary">
              Go back
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

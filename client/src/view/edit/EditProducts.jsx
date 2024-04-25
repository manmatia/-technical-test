import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProducts, getProductsById } from "../../redux/Actions";
import Swal from 'sweetalert2';
import "./EditProducts.css";

const EditProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productToEdit = useSelector((state) => state.product);
console.log(productToEdit);

  useEffect(() => {
    dispatch(getProductsById(id));
  }, [id, dispatch]);


  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    isFree: false,
    creationTime: "",
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        ...productToEdit,
      });
    }
  }, [productToEdit]);
  

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

    const { id, name, price, isFree, stock, creationTime } = formData;

    dispatch(editProducts(id, name, price, isFree, stock, creationTime))
        .then(() => {
           
            Swal.fire({
                icon: 'success',
                title: 'Producto editado correctamente',
                text: `El producto ${name} se editó correctamente.`,
                confirmButtonText: 'OK',
            });


            console.log("Producto editado correctamente");
        })
        .catch((error) => {
            console.error("Error al editar el producto:", error);
        });
};


  return (
    <div className="form-container">
      <h1> <h1> Edit form </h1></h1>
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
            Edit Product
          </button>
          <a href="/" target="_self">
            <button type="button" className="btn btn-outline-primary">
              Go back
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProducts
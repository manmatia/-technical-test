import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { getProducts, deleteProduct } from "../redux/Actions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import "./Table.css";
import Search from "./Search";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
 
console.log(products)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!products || !Array.isArray(products)) {
    return <div>No hay productos disponibles</div>;
  }


  const headers = products.length > 0
    ? Object.keys(products[0]).filter((header) => header !== "id")
    : [];
  headers.push("Actions");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (product) => {
    navigate(`/edit/${product.id}`);
  };

  const handleDelete = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete the product ${product.name}?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product.id));
        Swal.fire("Delete", "The product has been removed.", "success");
        dispatch(getProducts());
      }
    });
  };

  return (
    <div className="tableRes">
      <Search/>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                {headers.map((header, headerIndex) =>
                  header !== "Actions" ? (
                    <td key={headerIndex}>{String(product[header])}</td>
                  ) : (
                    <td key={headerIndex}>
                      <button onClick={() => handleEdit(product)} class="btn btn-success">
                        <img
                          src="data:image/png;base64,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"
                          alt="Edit"
                        />
                      </button>
                      <button onClick={() => handleDelete(product)} class="btn btn-danger">
                        <img
                        alt="delete"
                        src="data:image/png;base64,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"
                        />
                      </button>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Table

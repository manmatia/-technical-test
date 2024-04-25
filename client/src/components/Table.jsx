import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { getProducts, deleteProduct } from "../redux/Actions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import "./Table.css";

const Table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!products || !Array.isArray(products)) {
    return <div>No hay productos disponibles</div>;
  }

  // Definir los headers sin incluir el campo `id`
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
                      <button onClick={() => handleEdit(product)}>
                        <img
                          src="data:image/png;base64,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=="
                          alt="Edit Icon"
                        />
                      </button>
                      <button onClick={() => handleDelete(product)}>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADT09MyMjKamprZ2dmqqqp8fHzy8vK2trZlZWX8/PxgYGB2dnb29vZJSUno6OiUlJSkpKRFRUVbW1u/v7+CgoJRUVE+Pj7MzMzq6upqampYWFgmJiYbGxs5OTkNDQ3Dw8OMjIxwcHAXFxewsLAiIiIsLCzf39+Hh4c0NDReW6b3AAAI5ElEQVR4nO2d6XrqIBCGo3WJpkbtolW7GFur7f1f4DlpLQMEEmAGTJ6H71+bFHjLMjOgQ5JERUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFWav/OFjNduPDsUiv3RQPSkfzHqf9eJNdu0mk2jz3Kvpcbq/dLDJt7qt8Pzrk124aidKphq8crJMwbcjytFaowgs9X6md5+mYDier3frtdV/bigWihmU9YK/3hCm9Qf3l/KOpfizhqrn0D0+I54MRHJJwbFS+hzU1m+hWN1rCCuBp/fzw/CTPiRdyB+B4Y8PnTigBPhzPv9Zh2/96FZ/QsZUqTnZ8zoQi4O7MP8smwsMBBdhFW4V34YdQADz1K8+/CP6JCh3t+RyrFwBvVVav4F54RnL9Kdu5ADoRCoAz9Tt97pVqH7tooZyBT++D0fE4qZGD92gC+N9hhXdIFpuNzNb73E3OzX/nIAFwrH/vDt4iaEgh8+0KX669ALivexOCxgO61keJb+UvOpPtYM2rMBW/sS641IMzj/sIFU/muabxa/YW0mAMhSrfaFYutRS+6IMeEYbWCFVrKnhJB58xmdLZ1pu7DKYNqto1X90GVVSDNNGEfi4+/L0yx1TLR0qvfuzDRdpwSTtQoW2IanlD+OZ1g0sAXA1MehFMIqLeT6iHPhTjJXsywhaGBhGCDPd6+TEaFFBGVA5UAsIzV8nQuRQDqXzRZsQRnvAdqsCZnAapne3GgQovuFbMdeHUtQwT6aKJJkTWATeuNXNd6HMPXR9NCIhVB449enesOYXSj45FmKguHhQQ5WgfXG/XvRqwSW+OJZioPuCtG6gz9sB1FQSHtHAswUBNEb0ekRtijnMI3Jl7twJM1LxloTUa7/V/ZyA4N/A3C032ZDS9WMAvXeOBt78C9t4WUrNNJ3G5ufwyhZMhV1sBxtB1LW6UGaCyFzNu7891iMEGsK91xhRQYTTyJ/j5E1+/awnGFTQByqY/yfnzL+cOYJt1T64l1MsGUO5Fft/htulPdcpZEUvXImplB6g/8v50XgbBnnr5zIMtoBbRfesP7L2PzRl7QA0i4t8P8bMHa+gCqETERK0QP9PvkLoBKhBRYTnbx/okJ3QFrCDi9h1Y6HSiJnQHTLIXOkAgRB/sSMIAfhMCAuENLSECkHfVCLbGPBFiAO9JAT0RYoYobQ96IsQA3hADeiFs0RBNvBBiAOfkgB4I2zQHS5ETtsdMXERN2LIhmpATYoYo/SLzI1rC1rhqnEgJ22UmLqIkbN8cLEVI2DYzcREdIQbwzR8gHWE7h2hCR4jpQa+AVIRtHaIJFWHrXDVOJIStnYOlKAhb6KpxIiBsVURfFZ6wla4aJzRhq+dgKSxhS101TkjC9gMiCVs/RBMkYXtdNU4Ywha7apwQhG03Exe5E3ZhDpZyJmy3q8bJlbCNu2pqORJ2ZYgmroSdMBMXORF2wJMBuRB2CtCFsENzsJQ9YZfmYClrwu6YiYtsCTviqnGyJOzYHCxlR9gZV42TFWE3wiVJNoQdHKKJFWHXzMRF5oSdHKKJBWGbD19qZUrYzTlYypBw5Q7oaiYeRxc9WlVXkRmhkF+wJuWRQs6uGsv3gUzyZUQo5Iaz+6apu6vGcpo6f+PpVyaEi56gO4viEXMwJKHQSitETMAbkLCahM8UERXRhyPkv6hqh4gzE+EIxRSUFohIVy0coTpTazMi1lULRsglPhH6pAkRHdEHI4TvkaY3pVIeDqmmC3GM3fEvNifT1q7XlPWe+uCFo1FaKpD19So3k41fo1lQ97jUS9A0P1NtePuQhbRt8vcoW2UrsWXXyLV3odtwVeEK81wd9THqIXftC3BXYJ9/Q79PpPvQ9fsB+btxoKzLYZdAqTPVBS5nJzD3GZ8O2pRWiwqnMPdKxf3HQ66Tr5A2gtA9Tdw0NVYbgRjgsuwwSQEV8LoTt8W0C9rhFbs2wS2Y9/pGVLkmTSaHuX1k5hD2i+HKFXKy4LEcIzdQn23gvlrtBXmOpeuLYx4Sxv9wOjFhW4JWF5yFo8ChT3cy1tYJtvqv/A8djt7bJEBP6of/Qf1TpfNzAwMTD4h1B03ejy6USlXHlWqGTTmupX24Tv9gQ84PTqaIZ47RZibUzrnUlz/Gtq+l+WOmf/zYHt6s/HqrxHpwAAAABJRU5ErkJggg==" alt="Delete Icon"
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

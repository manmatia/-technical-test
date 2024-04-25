import React from 'react';
import "./Pagination.css"

const Pagination = ({ currentPage, productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  <div className='pagination'>
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === Math.ceil(totalProducts / productsPerPage) ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => paginate(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>    
  );
};

export default Pagination;

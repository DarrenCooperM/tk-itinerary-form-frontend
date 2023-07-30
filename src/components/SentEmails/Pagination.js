import React from "react";
import "./Pagination.css";

const Pagination = ({ emailsPerPage, totalEmails, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmails / emailsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() =>
              currentPage < pageNumbers.length && paginate(currentPage + 1)
            }
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

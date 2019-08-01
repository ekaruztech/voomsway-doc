import React from 'react';
import { Pagination } from 'react-bootstrap';


const Paginate = ({ active, totalCount, perPage, handlePageClick }) => {
  const pages = Math.ceil(totalCount / perPage); 
  let items = [];

  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item 
        key={number}
        active={number === active}
        onClick={() => handlePageClick(perPage, number) }
      >
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div className="pagination-container">
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default Paginate;

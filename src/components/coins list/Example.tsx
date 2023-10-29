import React, { useState } from 'react';
import { Coin } from '../../types/types';
import SingleCoin from './SingleCoin';

interface MyComponentProps {
  jsonData: Coin[]; // Replace 'any[]' with the actual type of your JSON data
  itemsPerPage: number;
}

const CalculatePages: React.FC<MyComponentProps> = ({ jsonData, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = jsonData.slice(startIdx, endIdx);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id='coins-list'>
      {currentItems?.map((coin) => (
        <SingleCoin {...coin} key={coin.id} />
      ))}
      <div className="d-flex justify-content-center align-items-center gap-3">
        <button
          onClick={prevPage}
          
          className="nav-btn colorful-bgc"
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <p className='m-0 p-0'>
          {currentPage + 1} of {totalPages}
        </p>
        <button
          onClick={nextPage}
          className="nav-btn colorful-bgc"
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CalculatePages;

import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';
import { useState } from 'react';
import React from 'react';

const items = getNumbers(1, 42).map(n => `Item ${n}`);

function getPostNumbers(perPage: number, currentPage: number): number[] {
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + (perPage - 1), items.length - 1);

  return [startIndex, endIndex];
}

export const App: React.FC = () => {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageCange = (page: number) => {
    setCurrentPage(page);
  };

  const [start, end] = getPostNumbers(perPage, currentPage);

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page 1 (items 1 - 5 of 42)
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            value={perPage}
            onChange={event => {
              setPerPage(parseInt(event.target.value));
              setCurrentPage(1);
            }}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      {/* Move this markup to Pagination */}
      <Pagination
        total={items.length}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageCange}
      />
      <ul>
        {items.slice(start, end + 1).map(item => (
          <li data-cy="item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

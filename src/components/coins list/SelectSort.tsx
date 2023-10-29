import React from 'react'

interface Props {
  sortArray: {
    text: string;
    value: string;
  }[];
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectSort = ({handleSortChange,sortArray}:Props) => {
  return (
    <select onChange={handleSortChange} className="search-input">
      {sortArray.map((s) => (
        <option key={s.value} className="bg-dark" value={s.value}>
          {s.text}
        </option>
      ))}
    </select>
  );
}

export default SelectSort
import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext';


function Category(props) {
  const { categories,setCurrCategory} = props;
  const {setPageNum} = usePaginationContext();
  return (

    

        <select name="Categories" id="category" className="categories"
        onChange={(e) => {
          const selectedCategory = e.target.value;
          setCurrCategory(selectedCategory);
          setPageNum(1);
        }}
        >
        <option value="All Categories">All Categories</option>
  {categories.map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ))}
        </select>
  )
}

export default Category
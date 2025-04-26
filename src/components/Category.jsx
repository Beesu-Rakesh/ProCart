import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext';


function Category(props) {
  const { categories,setCurrCategory} = props;
  const {setPageNum} = usePaginationContext();
  return (
    <>
    <button className="category-btn" onClick={()=>{setCurrCategory("All Categories")
    setPageNum(1);
    }}>
      All Categories
    </button>
        {categories.map((category)=>{
          return <button 
          className="category-btn" 
          onClick={()=>{
            setCurrCategory(category);
            setPageNum(1);
          }}>{category}</button>
        })}
    </>
  )
}

export default Category
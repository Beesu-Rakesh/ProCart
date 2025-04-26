import React, { useState, useEffect} from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductList from '../components/ProductList';
import Category from '../components/Category';
import basicOps from '../utility/basicOps';
import { usePaginationContext } from '../contexts/PaginationContext';


function Home() {
  const [searchTerm,setSearchTerm]=useState("");
  const [products,setProducts]=useState([]);
  const [sortDir,setSortDir]=useState(0);
  const [categories,setCategories]=useState([]);
  const [currCategory,setCurrCategory]=useState("All Categories");

  const { pageSize,pageNum,setPageNum,setPageSize} = usePaginationContext();

  //fetch the products from the api
  useEffect(()=>{
    (async function (){
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const productsData= await resp.json();
      setProducts(productsData);
    })();
  },[]);

  //fetch the categories from the api
  useEffect(()=>{
    (async function(){
      const resp = await fetch(`https://fakestoreapi.com/products/categories`);
      const categoriesData= await resp.json();
      setCategories(categoriesData);
    })();
  },[]);

  const object = basicOps(products,searchTerm,sortDir,currCategory,pageSize,pageNum);
  const filteredSortedGroupByArr = object.filteredSortedGroupByArr;
  const totalPages = object.totalPages;

  return (
    <>
    <header className="nav-wrapper">
      <div className="search-sortWrapper">
        <input className="search-input" 
        type='text' 
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)
          setPageNum(1);
        }} />
        <div className="icons-container">
          <FaArrowAltCircleUp style={{color:"white"}} onClick={()=>{setSortDir(1)
          setPageNum(1);
          }}/>
          <FaArrowAltCircleDown style={{color:"white"}} onClick={()=>{setSortDir(-1)
            setPageNum(1);
          }}/> 
        </div>
      </div>
      <div className="categories-wrapper">
        <Category categories={ categories } setCurrCategory={setCurrCategory}></Category>
      </div>
    </header>

    <main className="product-wrapper">
      <ProductList productList={ filteredSortedGroupByArr }></ProductList>
    </main>

    {/**********Pagination***********/}
    <div className="pagination">
      <button onClick={()=>{
        if(pageNum > 1){
          return setPageNum((pageNum)=>pageNum-1);
        }
      }}
      disabled={pageNum == 1 ? true : false}>
        <MdKeyboardArrowLeft fontSize="large"/>
      </button>
      <div className='pagenum'>{pageNum}</div>
      <button onClick={()=>{
        if(pageNum < totalPages){
          return setPageNum((pageNum)=>pageNum+1);
        }
      }}
      disabled={pageNum == totalPages ? true : false}>
        <MdKeyboardArrowRight fontSize="large"/>
      </button>
    </div>
    </>
  )
}

export default Home
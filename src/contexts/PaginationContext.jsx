import React from "react";
import {useState,useContext} from "react";


const PaginationContext = React.createContext();

export default function PaginationProvider({children}){
    const [pageSize,setPageSize]=useState(4);
    const [pageNum,setPageNum]=useState(1);
    const pageProps={
        pageSize,
        setPageSize,
        pageNum,
        setPageNum
    }
    return <PaginationContext.Provider value={pageProps}>
                {children}
           </PaginationContext.Provider>
}

//custom Hook
export const usePaginationContext =()=>{
    return useContext(PaginationContext);
}
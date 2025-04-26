export default function basicOps(products,searchTerm,sortDir,currCategory,pageSize,pageNum){
//filtering 
 let filteredArr= products;
 if (searchTerm != "") {
  filteredArr = filteredArr.filter((product) => {
    let lowerSearchTerm = searchTerm.toLowerCase();
    let lowerTitle = product.title.toLowerCase();
    return lowerTitle.includes(lowerSearchTerm);
  })
 }

 // sort the array based on the price
 let filteredSortedArr = filteredArr;
 if (sortDir != 0) {
  if(sortDir == 1){
    filteredSortedArr = filteredSortedArr.sort(inComparator);
 }else{
    filteredSortedArr = filteredSortedArr.sort(deComparator);
  }
 }
 
/*categorization*/
let filteredSortedGroupByArr = filteredSortedArr;
if(currCategory != "All Categories"){
  filteredSortedGroupByArr = filteredSortedGroupByArr.filter((product)=>{
    return product.category == currCategory;
  });
}


let totalPages = Math.ceil(filteredSortedGroupByArr.length/pageSize);
/****************Pagenation*******************/
let startIndex = (pageNum-1)*pageSize;
let endIndex = startIndex + pageSize;

filteredSortedGroupByArr = filteredSortedGroupByArr.slice(startIndex,endIndex);

return {filteredSortedGroupByArr , totalPages};
}

   // sort the array to asscending order based on the price
   function inComparator(product1,product2){
    if (product1.price > product2.price) {
      return 1;
    }else{
      return -1;
    }
  }

  // sort the array to descending order based on the price
  function deComparator(product1,product2){
    if (product1.price < product2.price) {
      return 1;
    }else{
      return -1;
    }
  }

       
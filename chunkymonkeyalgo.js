function chunkArrayInGroups(arr, num) {
    // The total length of the result array is = len(arr) // 2
  
    // each entry in the result array is the first num elements in arr 
  
    //subresult; loop -> push elements into subresult, then add subresult into result
    
    let result = [];
    let subresult = []; 
    let splitter = arr.length / num;
    let iterator = 0; 
    let index = 0;
    let endCond = num;
    
    while(iterator < splitter) {
      for(let i = index; i < endCond; i++) {
      subresult.push(arr[i]);
    }
    result.push(subresult)
    subresult = []
    iterator++;
    index += num;
    if(endCond + num < arr.length) {
      endCond += num
    }
    else {
        endCond = arr.length; 
    }
  }
  
    return result
  
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
var sortedSquares = function(nums) {
    
    let squares=nums.map((item)=>{return item*item})
    squares=squares.sort((a,b)=>{return a-b});
    return squares;
};
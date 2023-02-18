//Given a binary array nums, return the maximum number of consecutive 1's in the array.
var findMaxConsecutiveOnes = function(nums) {
    nums.push(0)
    let count=0;
    let onesCount=[];
    nums.forEach((item)=>{
        if(item===1){
            count+=1;
        }
        if(item !== 1){
            onesCount.push(count)
            count=0;
        }
    })
    return  Math.max(...onesCount)
    
};
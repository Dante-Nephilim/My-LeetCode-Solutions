/*
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].
*/
var heightChecker = function(heights) {
  let result=0;
  let expected=[...heights];
  expected.sort((a,b)=>a-b);
  for(let i=0;i<heights.length;i++){
    console.log(`${heights[i]} !== ${expected[i]} => ${heights[i]!=expected[i]}`)
    if(heights[i]!==expected[i]){
      result++
    }
  }
  return result;
};
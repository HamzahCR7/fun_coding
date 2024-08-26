// Find the Maximum Product of Two Integers in an Array

// 1.Problem: Given an array of integers, find the maximum product of two integers in the array.
// Example:
// Input: arr = [1, 4, 3, -6, -7, 0]
// Output: 42 (product of -6 and -7)

// const arr = [1, 4, 3, -6, -7, 0];
// const sortedArr = arr.sort();
// console.log(sortedArr);
// console.log(arr[0]*arr[1]);  // this approach is somewhat correct but not feasible

//correct approach
// const arr = [1, 4, 3, 6, 7, 0];
// // const arr = [1, 4, 3, -6, -7, 0];
// const sortedArr = arr.sort((a,b) => a-b);
// console.log(sortedArr);
// const maxProduct = Math.max(sortedArr[0]*sortedArr[1], sortedArr[arr.length-1]* sortedArr[arr.length-2]);//here we are checking that if both numbers are in negative or if both are positives
// console.log(maxProduct)

// 2.Problem: Given an array of integers, find the maximum product of any three integers in the array.
// Example:
// Input: arr = [1, 10, 2, 6, 5, 3]
// Output: 300 (product of 10, 6, 5)
//solution
// const arr = [1, 10, 2, 6, 5, 3];
// const sortedArr = arr.sort((a,b) => a-b);
// console.log(sortedArr);
// const maxProduct = Math.max(sortedArr[0]*sortedArr[1]*sortedArr[2], sortedArr[sortedArr.length-3]*sortedArr[sortedArr.length-2]*sortedArr[sortedArr.length-1]);
// console.log(maxProduct)

// 3. Find Two Numbers Whose Product is Closest to a Target
// Problem: Given an array of integers and a target number, find two numbers whose product is closest to the target.
// Example:
// Input: arr = [10, 22, 28, 29, 30, 40], target = 500
// Output: 28, 22 (product is 616, closest to 500);

// const arr = [10, 22, 28, 29, 30, 40];
// for(let i =0; i<arr.length; i++) {
//     const arrSet = arr.slice(i,i+2);
//     // console.log(arrSet);
//     if(arrSet.length>1){
//     const product = Math.max(arrSet[0]*arrSet[1]);
//     if(product>550 && product<=660) {
//         console.log(arrSet)
//     }
//     }
// }

// another solution
function maxProduct(arr){
    let product = 0;
    let maximum = 1000000;
    let subArray=[]
    for(let i =0; i<arr.length-1; i++){
        for(let j = i; j<arr.length-1; j++) {
            product = arr[i]*arr[j];
            if(Math.abs(product-6000) < Math.abs(maximum- 6000)){
                maximum = product;
                subArray = [arr[i], arr[j]]
            }
        }
    }
    console.log(maximum, subArray)

}

maxProduct([10, 22, 28, 29, 30, 400])
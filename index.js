//basic array opetations
const arr = [1,2,3,4,5];
let max = Math.max(...arr);
// console.log(max);
// console.log(Math.min(...arr));
// console.log(arr.push(10));
// console.log(arr.pop());

// console.log(arr.unshift(100)); // add elememnt on index 0
// console.log(arr.shift()) // remove element from index 0;

// const removeArr = arr.splice(0,2);
// console.log("removeArr", removeArr);
// const newArr = arr.concat(removeArr);
// console.log(newArr);

// const findIndex = newArr.indexOf(3);
// console.log(findIndex);
// console.log(newArr.splice(findIndex,1));
// console.log(newArr)
// console.log(arr.slice(0,1))


// const findIndex = arr.indexOf(3);
// console.log(arr.splice(findIndex,1))

//map to modify elements but not to original arr elemnets
// const newArr = arr.map(num => num*num);
// console.log(newArr)

//filter an array
// const filteredArr = arr.filter(num => num%2 ==0);
// console.log(filteredArr)

//array reduce method to find the sum of all elements on an array
// const sum = arr.reduce((acc,prev) => acc+prev, 0);
// console.log(sum)

//find the unique elements out of given duplicate aray elements
// let newArr = [1,1,1,1,1,12,3,4,5,5,67,88,1,2,3,3];
// console.log(newArr);
// const uniqueArr = [...new Set(newArr)];
// console.log('unique arr ',uniqueArr)

//find the intersection(common elements of two arrays)
// const arr1=[1,23,45,56,122];
// const arr2=[90,12,11,56,122,90,11,1,23];
// const commonArr = arr1.filter(el => arr2.includes(el));
// console.log(commonArr)
// console.log(arr);

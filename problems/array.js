// get the square of all array values
// let nums = [1, 2, 3, 4, 5]; // [1, 4, 9, 16, 25]
// let sqNums = nums.map((num) => num * num);
// console.log(sqNums);

// remove the duplicates from the array
// let nums = [1, 2, 3, 2, 1]; // [1, 2, 3]
// // let uniqueNums = [];
// // for (let i = 0; i < nums.length; i++) {
// //   if (uniqueNums.includes(nums[i])) {
// //   } else {
// //     uniqueNums.push(nums[i]);
// //   }
// // }

// let uniqueNums = [...new Set(nums)];
// console.log(uniqueNums);

// get the unique nums from the array
// let nums = [1, 2, 3, 2, 1]; // [3]
// console.log(nums.lastIndexOf(1));

let name = "vasanth";
let nameArr = name.split("").sort();
let uniqArr = [...new Set(nameArr)];
// a - 2, h - 1, n - 1, s - 1, t - 1, v - 1
function getCount(char, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count += 1;
  }
  console.log(char, count);
}

for (let i = 0; i < uniqArr.length; i++) {
  getCount(uniqArr[i], name);
}

// add your solutions here
function isPositive(nums){
    let results = [];
    const isPos = (num) => num > 0;
    results.push(nums.filter(isPos))
    return results;
}
myNums = [1,2,3,4,5,6,7,-3,-4,-5];
console.log(isPositive(myNums));

function isEven(nums){
    let results = [];
    const isEven = (num) => num % 2 === 0;
    results.push(nums.filter(isEven));
    return results;
}
console.log(isEven(myNums));

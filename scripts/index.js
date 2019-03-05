// add your solutions here
function isPositive(nums){
    results = []
    const isPositive = (num) => num > 0;
    results.push(nums.filter(isPositive))
    return results
}
myNums = [1,2,3,4,5,6,7,-3,-4,-5]
console.log(isPositive(myNums))
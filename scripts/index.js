// add your solutions here
function isPositive(nums){
    result = []
    nums.forEach(function (num){
        if (num > 0){
            result.push(num)
        }
    })
    return result
}
myNums = [1,2,3,4,5,-6,-7,-8,3,5,6,-9]

console.log(isPositive(myNums))
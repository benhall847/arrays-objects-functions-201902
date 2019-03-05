// add your solutions here
function isPositive(nums){
    return nums.filter(num => num > 0);
}

myNums = [1,2,3,4,5,6,7,-3,-4,-5];
console.log(isPositive(myNums));




function isEven(nums){
    return nums.filter(num => num % 2 === 0);
}
console.log(isEven(myNums));

function squareNumbers(nums){
    let results = [];
    nums.forEach(function(num){
        results.push(num * num)
    });
    return results
}
console.log(squareNumbers(myNums));

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function CitiesTemp(info,temp){
    const tempRequested = num => num < temp;
    info.forEach(function (myObject){
        if (tempRequested(myObject.temperature)){
            console.log(myObject.name)
        }
    })
}
CitiesTemp(cities,70)
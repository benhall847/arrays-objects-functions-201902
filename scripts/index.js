// add your solutions here
function isPositive(nums){
    return nums.filter(num => num > 0);
}

myNums = [1,2,3,4,5,6,7,-3,-4,-5];
// console.log(isPositive(myNums));




function isEven(nums){
    return nums.filter(num => num % 2 === 0);
}
// console.log(isEven(myNums));

function squareNumbers(nums){
    let results = [];
    nums.forEach(function(num){
        results.push(num * num);
    });
    return results;
}
// console.log(squareNumbers(myNums));

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function citiesTemp(info,temp){
    return info.filter(eaObject => eaObject.temperature < temp);
}
// console.log(citiesTemp(cities,70))

function cityNames(info){
    return info.map(eaObject => eaObject.name);
}
// console.log(cityNames(cities))

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function printEveryone(myList){
    myList.forEach(function (name){
        console.log(`Good Job, ${name}`);
    })
}
// printEveryone(people)

function call3Times(fun) {
    fun();
    fun();
    fun();

}
function helloWorld(){
    console.log("hello world");
}
// call3Times(helloWorld)

function callNTimes(times, fun){
    for (let i = 0; i < times; i++){
        fun();
    }
}
// callNTimes(5, helloWorld)

function strMultiply(str, times){
    let results = '';
    for (let i = 0; i < (times); i++){
        results += str;
    }
    return results;
}
console.log(strMultiply("KITTY",5))


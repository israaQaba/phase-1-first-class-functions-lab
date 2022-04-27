const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,-2);
}

console.log(returnFirstTwoDrivers(drivers));



const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
}

console.log(returnLastTwoDrivers(drivers));




const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = operand => {
    return (input) => input * operand;
}


const fareDoubler = function createFareMultiplier(x) {
    return x * 2
}
console.log(fareDoubler(5))


const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12))


const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
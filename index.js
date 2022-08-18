// Code your solution here
function findMatching(drivers, name){
    let myDrivers = drivers.filter((matching) => matching.toLowerCase() === name.toLowerCase());
    return myDrivers;
}

function fuzzyMatch(drivers, name){
    const myDriver = drivers.filter((match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0);
    return myDriver;
}

function matchName(drivers, name){
    const myDrivers = drivers.filter((match) => match.name === name)
    return myDrivers
}
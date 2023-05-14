// Code your solution here
function findMatching(driverArr, string) {
    return driverArr.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

const fuzzyMatch = function(arr, str) {
    return arr.filter(driver => {
       if (driver.slice(0, 2) === str) {
        return driver;
       }
    })
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name === name;
  })
}
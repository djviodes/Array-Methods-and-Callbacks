import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final

console.log(fifaData[fifaData.length - 23]["Home Team Name"]);

// (b) Away Team name for 2014 world cup final

console.log(fifaData[fifaData.length - 23]["Away Team Name"]);

// (c) Home Team goals for 2014 world cup final

console.log(fifaData[fifaData.length - 23]["Home Team Goals"]);

// (d) Away Team goals for 2014 world cup final

console.log(fifaData[fifaData.length - 23]["Away Team Goals"]);

// (e) Winner of 2014 world cup final 

console.log(fifaData[fifaData.length - 23]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array){
    return array.filter(function(item){
        return item["Stage"] === "Final";
    });
}
const finalsData = fifaData.filter(function(item){
    return item.Stage === "Final";
});

console.log(finalsData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback){
    return callback.map(function(item){
        return item.Year;
    });
}
const years = finalsData.map(function(item){
    return item.Year;
});

getYears(getFinals(fifaData));
console.log(years);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

let winners = [];
function getWinners(callback){
    callback.map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        } else if (item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Name"]);
        } else {
            winners.push(item["Win conditions"]);
        }
    });
    return winners;
};

console.log(winners);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    const winners = callback2;
    const years = callback1;
    const yearlyWinners = []
    winners.forEach(function(item, index) {
        yearlyWinners.push(`In ${years[index]}, ${item} won the world cup!`)
    })
    return yearlyWinners
}

console.log(getWinnersByYear(getYears(getFinals(finalsData)), getWinners(getFinals(finalsData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let addGoals = data.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
    }, 0);
    return Math.round(addGoals / (data.length - 1));
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

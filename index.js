// code your solution here
// 1. saturdayFun function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;

}




// 2. mondayWork function expression with default parameter
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}






// 3. wrapAdjective function that returns another function
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

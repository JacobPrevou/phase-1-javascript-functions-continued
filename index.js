// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");


function wrapAdjective(emphatic = '*'){
    const inner = function (byDefault = "special") {
        return `You are ${emphatic}${byDefault}${emphatic}!`;
    }
    return inner;
}
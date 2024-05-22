var hobbies = [
    "basketball",
    "playing an instrument",
    "reading",
    "building computers",
    "playing with pets",
    "family time",
];

console.log(hobbies.length);

hobbies.push("baking");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "swimming", "writing");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("running");

var goals = ["become a developer", "workout more", "become more organized"];

//var allTheThings = hobbies.concat(goals);
var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("reading"));

allTheThings.splice(8, 1);

console.log(allTheThings);

var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}!`;
});
console.log(plans);
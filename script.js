
const team = ["Fakhar", "Babar", "Rizwan"];
const bowlers = ["Shaheen", "Haris", "Naseem"];

team.push(bowlers);

console.log(team);

const newTeam = team.concat(bowlers);
console.log(newTeam);
const usernames = ["user1", "user2", "user3", "user4", "user5"];

usernames.forEach((username) => {
  console.log("Username: " + username);
});

//Challenge:
const firstNames = ["Petr", "Adam"];
const secondNames = ["Novák", "Husár"];

firstNames.forEach((firstName, firstIndex) => {
  console.log(`${firstName}, ${secondNames[firstIndex]}`);
});

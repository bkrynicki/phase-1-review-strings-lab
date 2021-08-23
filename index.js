// Write your code in this file!

//Define currentUser
const currentUser = `Grace Hopper`;

//Standard Welcome Message
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);

//Excited Welcome Message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage)

//Short Greeting Message
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`
console.log(shortGreeting);
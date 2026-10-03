import {test} from "@playwright/test";

//to run test from VScode Terminal (and within the Docker container),
//I have saved the environment variables in an .env file and I use 'source .env' to call them:

//source .env && npx playwright test environment-variables.spec.js

test ("env variable test", ({page}) => {


console.log("username is " + process.env.PRACTICE_USERNAME);
console.log(`password is: ${process.env.PRACTICE_PASSWORD}`);

});
//VARIABLES ARE SAVED IN USER SETTINGS.JASON
//works when running tests with playwright extension (green arrows)
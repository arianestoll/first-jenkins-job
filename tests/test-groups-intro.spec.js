import {test} from "@playwright/test";


test.describe("test group example", () => {     //second argument is a callback function ()=>{}


    test.beforeAll(async () => {
        console.log("BeforeALL test ran.");
    });

     test.afterAll(async () => {
        console.log("AfterALL test ran.");
    });

test.beforeEach(async() => {
    console.log("BEFORE each test case");
}); //will probably contain async tests from page fixture so it's best to make it async

test.afterEach(async() => {
    console.log("AFTER each test case");
}); 

test("Test Case 1", async () => {

console.log("testcase 1 executed");

});



test("Test Case 2", async () => {

    console.log("testcase 2 executed");


});

test("Test Case 3", async () => {

console.log("testcase 3 executed");

});

});

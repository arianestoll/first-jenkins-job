import {test} from "@playwright/test" //@playwright/test package contains the 'page' fixture

/*
test.describe("d", () => {

test.beforeEach(async({page}) => {

    
});

test.afterEach(async ({page})=>{

} );



test("1", async ({page} ) => {



});

test("2", async ({page} ) => {


});

test("3", async ({page} ) => {


});

});

*/

test.describe("User Story ref", () => {


test.beforeEach(async({page}) => {
await page.goto("https://the-internet-5chk.onrender.com/");

});


test.afterEach(async ({page})=>{

await page.waitForTimeout(1000);
} );



  test("title of page", async ({page} ) => {
console.log(await page.title());

});

test("url of page", async ({page} ) => {
console.log(page.url);

});


});
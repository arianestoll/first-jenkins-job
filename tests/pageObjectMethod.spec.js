import {test} from "@playwright/test";

test('Getting the title of the page @titletest', async ({page}) => {

await page.goto("https://the-internet-5chk.onrender.com/");

let actualTitle = await page.title();

console.log(actualTitle);

});

test('getting the current url of the page', async({page}) => {
await page.goto("https://the-internet-5chk.onrender.com/");
let actualUrl = page.url();

console.log(actualUrl);

})

test('Setting the window size', async ({page}) => {

await page.goto("https://the-internet-5chk.onrender.com/");

// await page.setViewportSize({width: 1850, height: 1080}); // a line can be added on chrome properties in playwright .config

//I cannot see the size of the window increasing because I am running the test through Docker, and headless

});

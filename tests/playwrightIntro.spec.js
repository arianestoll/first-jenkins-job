//const {test} = require("@playwright/test"); //@playwright/test is the library we want to use
//from the library, we want to import 'test'functions
//'page' is a fixture that has set up and teardown etc. in place and 
// it follows our global configuration of Playwright: running on headless, Chrome etc

import {test} from "@playwright/test";

test("", async ({page}) =>{

await page.goto("https://www.google.com");

await page.waitForTimeout(3000);// this is a method from the 'page' fixture
//waitfortimeout only for us to see something when running in headed or in the test recording
//otherwise, when using an sync function with await, there is no need for more wait

});
//adding some comments to have something to commit
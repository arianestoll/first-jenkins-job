import {test} from "@playwright/test";

test("simple google test", async ({page}) => {

await page.goto("https://www.google.com/");

let searchBox = page.locator("//textarea[@class='gLFyf']");

//await searchBox.type("CYDEO"); //type method is deprecaed , that's why it is crossed out

await searchBox.fill("CYDEO");

await searchBox.press("Enter");

})

/*



<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="ti6dpd" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="2ahUKEwjE5NiX5_iWAxXhQUEAHXCCJ78Q39UDegQIBRBp" aria-activedescendant="" style="">branch 
and pull request vs code github NOT terminal</textarea>


*/

//textarea[@class='gLFyf']
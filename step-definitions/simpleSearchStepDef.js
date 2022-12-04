import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import SearchPage from '../features/pageobjects/simpleSearchPageObject.js';
import SecurePage from '../features/pageobjects/secure.page.js';
import securePage from '../features/pageobjects/secure.page.js';

/*const pages = {
    login: LoginPage
}
*/
let expected="";
Given(/I am on the home page/, async () => {
    await SearchPage.open();
    if(await(await securePage.cookieAccept).isDisplayed()){
        await (await securePage.cookieAccept).click();
       }
});

When(/I click Find a cause button/, async () => {
    await (await SearchPage.findCauseButton).waitForClickable();
    await (await SearchPage.findCauseButton).click();
   
   
});

Then(/^I start to write (.*)? into the search box$/, async (characters) => {
    await (await SearchPage.searchBox).click();
    await (await SearchPage.searchBox).clearValue();
    await (await SearchPage.searchBox).setValue(characters);
    await browser.pause(2000);
    const totalResult = await SearchPage.listOfSearch.length;
    console.log(totalResult);
    if(totalResult > 3){
      expected=await (await SearchPage.selection).getText();
      console.log(expected);
      await(await SearchPage.listOfSearch[2]).click();
    }else{
       throw new Error("There is no third option for this search");
    }
});

Then(/I click search button/, async () => {
    await(await SearchPage.submitButton).waitForClickable();
    await(await SearchPage.submitButton).click();
    await browser.pause(2000);
});


Then(/I verify that the selected 3rd Cause exists in the Search results/, async () => {
    const actual=await (await SearchPage.selectedOption).getText();
    console.log(actual + " actual result");
    console.log(expected+ " expected ");
    expect(expected).equal(actual);
});




import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get findCauseButton () {
        return $('//span[text()="Find a cause"]');
    }

    get searchBox () {
        return $('(//input[@type="text"])[1]');
    }

    get submitButton () {
        return $('//button[@id="sagc-hero-search-submit"]');
    }

    get listOfSearch () {
        return $$('//li[@class="style_suggestion__-CRCo"]');
    }

    get selection () {
        return $('(//button[@class="style_suggestionBtn__47Wy4"])[3]'); 
    }
    
    get selectedOption () {
        return $('(//p[@class="style_title__1XLVx"])'); 
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     * 
     * 
     * 
     *  
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();

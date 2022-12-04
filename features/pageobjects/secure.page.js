

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get cookieAccept () {
        return $('//button[@class="bg-primary text-ink-500 text-center hover:bg-button-interactive py-4 px-6 rounded-4 transition-background-color duration-200 ease-in-out transform inline-block no-underline font-easy text-easy leading-easy tracking-easy cookie-consent-button w-full"]');
    }
}

export default new SecurePage();

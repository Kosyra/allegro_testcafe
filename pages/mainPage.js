import {Selector, t} from 'testcafe'

class MainPage{
    constructor() {
        this.cookieButton = Selector('button[data-role="accept-consent"]');
        this.inputItemField = Selector('input[name="string"]');
        this.searchButton = Selector('button[data-role = "search-button"]');
        this.usedRadioButton = Selector('label').withText('używane');
        this.buyNowRadioButton = Selector('label').withText('kup teraz');
        this.inputPriceField = Selector('#price_from');
        this.randomItemElement = Selector('section article').nth(1);
    }

    async acceptCookie(){
        await t.click(this.cookieButton())
    }

    async searchItem(itemName){
        await t
            .typeText(this.inputItemField(), itemName)
            .click(this.searchButton());
    }
}

export default new MainPage();
import {Selector, t} from 'testcafe'

export const elements = {
    button : {
        cookieButton : Selector('button[data-role="accept-consent"]'),
        searchButton : Selector('button[data-role = "search-button"]'),
        usedRadioButton : Selector('label').withText('używane'),
        buyNowRadioButton : Selector('label').withText('kup teraz'),
    },

    field : {
        inputItemField : Selector('input[name="string"]'),
        inputPriceField : Selector('#price_from'),
    },

    randomItemElement : Selector('section article').nth(1)
}

export const searchItem = async (itemName) => {
    await t
        .typeText(elements.field.inputItemField(), itemName)
        .click(elements.button.searchButton());
}

export const acceptCookie = async () => {
    await t.click(elements.button.cookieButton())
}
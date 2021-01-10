import {Selector, t} from "testcafe";

export const elements = {
    buttons : {
        buyButton : Selector(''),
        removeItemButton : 'button[data-analytics-interaction-label="remove"]'
    },
    span : {
        emptyCartSpan : Selector('span').withText('Twój koszyk jest pusty')
    },
    goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
    itemTitle : Selector('offer-title > div > div > a')
}

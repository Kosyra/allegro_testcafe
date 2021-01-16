import {Selector, t} from "testcafe";

export const elements = {
    button : {
        removeItemButton : 'button[data-analytics-interaction-label="remove"]',
        goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
    },
    span : {
        emptyCartSpan : Selector('span').withText('Twój koszyk jest pusty')
    },
    itemTitle : Selector('offer-title > div > div > a')
}

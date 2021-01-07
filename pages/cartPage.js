import {Selector, t} from "testcafe";

export const elements = {
    buttons : {
        buyButton : Selector('')
    },
    goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
    itemTitle : Selector('offer-title > div > div > a')
}

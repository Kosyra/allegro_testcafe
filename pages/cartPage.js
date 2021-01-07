import {Selector, t} from "testcafe";

export const elements = {
    goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
    itemTitle : Selector('offer-title > div > div > a')
}

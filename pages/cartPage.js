import {Selector, t} from "testcafe";

class CartPage{
    constructor(){
        this.removeItemButton = 'button[data-analytics-interaction-label="remove"]';
        this.goToCartButton = Selector('a[data-analytics-click-label="goToCart"]');
        this.itemTitle = Selector('offer-title > div > div > a');
        this.emptyCartSpan = Selector('span').withText('Twój koszyk jest pusty')
    }

}

// export const elements = {
//     buttons : {
//         removeItemButton : 'button[data-analytics-interaction-label="remove"]'
//     },
//     span : {
//         emptyCartSpan : Selector('span').withText('Twój koszyk jest pusty')
//     },
//     goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
//     itemTitle : Selector('offer-title > div > div > a')
// }
export default new CartPage();

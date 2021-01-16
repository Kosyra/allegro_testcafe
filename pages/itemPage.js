import {Selector, t} from 'testcafe'

class ItemPage {
    constructor() {
        //this.itemTitle = Selector('div h1');
        //this.addToCartButton = Selector('button#add-to-cart-button');
        //this.goToCartButton = Selector('a[data-analytics-click-label="goToCart"]');
    }

    // get getItemTitle(){
    //     return Selector('div h1').innerText;
    // }
}

export default new ItemPage();

export const elements = {
    button : {
        addToCartButton : Selector('button#add-to-cart-button'),
        goToCartButton : Selector('a[data-analytics-click-label="goToCart"]'),
    }
}

export const getItemTitle = () =>{
    return Selector('div h1').innerText;
}


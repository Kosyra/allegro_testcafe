import { Selector } from "testcafe";

const cookieButton = Selector('button[data-role="accept-consent"]');
const inputItemField = Selector('input[name="string"]');
const item = 'iPhone 11 PRO';
const searchButton = Selector('button[data-role = "search-button"]');
const usedRadioButton = Selector('label').withText('używane');
const buyNowRadioButton = Selector('label').withText('kup teraz');
const inputPriceField = Selector('#price_from');
const randomItemElement = Selector('section article').nth(1);
const addToCartButton = Selector('button#add-to-cart-button');
const goToCartButton = Selector('a[data-analytics-click-label="goToCart"]');
const itemTitle = Selector('div h1');

fixture('Adding items to cart on classic allegro')
    .beforeEach(async t => await t.maximizeWindow())
    .page("https://allegro.pl")

test('Used item should be added to the cart', async t =>{
    await t
        .click(cookieButton())
        .typeText(inputItemField, item)
        .click(searchButton())
        .click(usedRadioButton())
        .click(buyNowRadioButton())
        .typeText(inputPriceField(), '2000')
        .click(randomItemElement())
        .click(addToCartButton())
        .click(goToCartButton())
    /*let text = itemTitle().innerText;
    console.log(text)
    await t
        .expect(await Selector("//a[contains(text(), '" + text + "')]").exists)
        .debug()*/
})
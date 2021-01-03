import { Selector, ClientFunction } from "testcafe";

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
const mainPageUrl = 'https://allegro.pl';

const getItemTitle = Selector('div h1').innerText;

const verifyIfCorrectItem = (title)=>{
    return Selector("//a[contains(text(), '" + title + "')]")
}

fixture('Adding items to cart on classic allegro')
    .meta('category', 'cart')
    .beforeEach(async t => {await t.maximizeWindow()})
    .page('')

test.page(mainPageUrl)('The used item should be added to the cart', async t =>{
    await t
        .click(cookieButton())
        .typeText(inputItemField, item)
        .click(searchButton())
        .click(usedRadioButton())
        .click(buyNowRadioButton())
        .typeText(inputPriceField(), '2000')
        .click(randomItemElement())
        .click(addToCartButton());

    const title = await itemTitle().innerText;
    console.log("The title of the item is: " + title)
    await t
        .click(goToCartButton())
        .expect(Selector('offer-title').child().child(1).withText(title).exists).ok('W koszyku nie znaleziono oczekiwanego przedmiotu')
        .debug()
})
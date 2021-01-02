import {Selector} from "testcafe";
import { ClientFunction } from 'testcafe';

const getURL = ClientFunction(() => window.location.href);
const cookieButton = Selector('button[data-role="accept-consent"]');
const inputItemField = Selector('input[name="string"]');
const item = 'iPhone 11 PRO';
const searchButton = Selector('button[data-role = "search-button"]');
const usedButton = Selector('label').withText('używane');
const inputPriceField = Selector('#price_from');
const randomItemElement = Selector('section article').nth(12);

fixture('Adding items to cart')
    .page("https://allegro.pl")

test('The item should be added to the cart', async t =>{
    const url = await getURL();
    await t.maximizeWindow()
        .click(cookieButton())
        //.debug()
        .typeText(inputItemField, item)
        .click(searchButton())
        .click(usedButton())
        .typeText(inputPriceField(), '200')
        .click(randomItemElement())
        .debug()
})
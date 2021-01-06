import { Selector, ClientFunction } from "testcafe";
import homePage from '../pages/mainPage';
import itemPage from '../pages/itemPage';
import * as cartPage from '../pages/cartPage';

const item = 'iPhone 11 PRO';
const addToCartButton = Selector('button#add-to-cart-button');
const goToCartButton = Selector('a[data-analytics-click-label="goToCart"]');
const mainPageUrl = 'https://allegro.pl';

/*
Preconditions:
1. Dowolny użytkownik
2. Bez wcześniej zapisanych cookie
3. Nie posiada żadnego przedmiotu w koszyku

Steps:
1. Wejdź na główną stronę allegro.pl i zaznacz "Przejdź dalej" w oknie
2. Wyszukaj przedmiot
3. Zaznacz kolejno opcje: Używane, Kup teraz, Kwota minimalna = 2000
4. Wybierz dowolny przedmiot z listy dostępnych
5. Dodaj przedmiot do koszyka
6. Przejdź do koszyka
7. Sprawdź czy wybrany przedmiot znajduje się w koszyku
*/

fixture('Adding items to cart on classic allegro')
    .meta('category', 'cart')
    .beforeEach(async t => {
        await t.maximizeWindow()
        await homePage.acceptCookie()})
    .page('')

test.page(mainPageUrl)('The used item should be added to the cart', async t =>{
    await t
        .typeText(homePage.inputItemField(), item)
        .click(homePage.searchButton())
        .click(homePage.usedRadioButton())
        .click(homePage.buyNowRadioButton())
        .typeText(homePage.inputPriceField(), '2000')
        .click(homePage.randomItemElement())
        .click(addToCartButton());

    const title = await itemPage.getItemTitle;
    console.log("The title of the item is: " + title)
    await t
        .click(cartPage.elements.goToCartButton())
        .expect(Selector('offer-title').child().child(1).withText(title).exists).ok('W koszyku nie znaleziono oczekiwanego przedmiotu')
        //.debug()
})
import * as constants from '../constants/constants'
import homePage from '../pages/mainPage';
import itemPage from '../pages/itemPage';
import * as cartPage from '../pages/cartPage';
import mainPage from "../pages/mainPage";

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

const item = 'iPhone 11 PRO';

fixture('Adding items to cart on classic allegro')
    .meta('category', 'cart')
    .beforeEach(async t => {
        await t.maximizeWindow()
        await homePage.acceptCookie()})
    .page('')

test.page(constants.url.mainPageUrl)('The used item should be added to the cart', async t =>{
    await mainPage.searchItem(item);
    await t
        .click(homePage.usedRadioButton())
        .click(homePage.buyNowRadioButton())
        .typeText(homePage.inputPriceField(), '2000')
        .click(homePage.randomItemElement())
        .click(itemPage.addToCartButton());

    const title = await itemPage.getItemTitle;
    console.log("The title of the item is: " + title)
    await t
        .click(cartPage.elements.goToCartButton())
        .expect(cartPage.elements.itemTitle().innerText).eql(title)
        //.debug()
})
import * as constants from '../constants/constants'
import * as mainPage from "../pages/mainPage";
import * as itemPage from "../pages/itemPage";
import * as cartPage from '../pages/cartPage'

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
7. Usuń przedmiot z koszyka
8. Sprawdź czy pojawia się napis 'Twój koszyk jest pusty'
*/

const item = 'iPhone 11 PRO';

fixture('Removing items from the cart on classic allegro')
    .meta('category', 'cart')
    .beforeEach(async t =>{
        await t.maximizeWindow()
        await mainPage.acceptCookie()})
    .page(constants.url.mainPageUrl)

test('The used item should be removed from the cart', async t =>{
    await mainPage.searchItem(item);
    await t
        .click(mainPage.elements.button.usedRadioButton())
        .click(mainPage.elements.button.buyNowRadioButton())
        .typeText(mainPage.elements.field.inputPriceField(), '2000')
        .click(mainPage.elements.randomItemElement())
        .click(itemPage.elements.button.addToCartButton())
        .click(cartPage.elements.button.goToCartButton())
        .click(cartPage.elements.button.removeItemButton)
        .expect(cartPage.elements.span.emptyCartSpan().exists).ok()
        //.debug()
})

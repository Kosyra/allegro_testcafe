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
const itemTitleItemPage = Selector('div h1');
const mainPageUrl = 'https://allegro.pl';

/*
Preconditions:
1. Dowolny użytkownik
2. Bez wcześniej zapisanych cookie
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

    const title = await itemTitleItemPage().innerText;
    console.log("The title of the item is: " + title)
    await t
        .click(goToCartButton())
        .expect(Selector('offer-title').child().child(1).withText(title).exists).ok('W koszyku nie znaleziono oczekiwanego przedmiotu')
        //.debug()
})
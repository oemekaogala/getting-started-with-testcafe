import { Selector } from 'testcafe';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

fixture `Getting Started`
    .page `https://demo.applitools.com/gridHackathonV1.html`;
    // .page `https://demo.applitools.com/gridHackathonV2.html`;

test('My first test', async t => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    await t
        .click(homePage.firstProduct)
        .click(productPage.newPrice)
        .wait(10000);
});
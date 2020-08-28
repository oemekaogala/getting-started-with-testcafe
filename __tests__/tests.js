import { Site } from '../pages/Site';

fixture `ANST Demo`
    .page `https://demo.applitools.com/gridHackathonV1.html`; // Clean
    // .page `https://demo.applitools.com/gridHackathonV2.html`; // Buggy

test('Confirm new price format', async t => {
    const site = new Site();
    const expectedPriceFormat = '$33.00';
    await t
        .click(site.homepPage.firstProduct)
        .expect(site.productPage.newPriceLabel.innerText).eql(expectedPriceFormat);
});
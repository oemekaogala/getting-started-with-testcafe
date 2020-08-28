import { Selector } from 'testcafe';

export class ProductPage {
    constructor () {
        this.newPriceLabel = Selector('#new_price');
    }
}
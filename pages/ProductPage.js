import { Selector } from 'testcafe';

export class ProductPage {
    constructor () {
        this.newPrice = Selector('#new_price');
    }
}
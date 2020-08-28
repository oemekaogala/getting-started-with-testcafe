import { Selector } from 'testcafe';

export class HomePage {
    constructor () {
        this.firstProduct = Selector('#product_1');
    }
}

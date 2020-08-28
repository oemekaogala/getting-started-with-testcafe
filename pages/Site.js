import { HomePage } from './homepage';
import { ProductPage } from './ProductPage';

export class Site {
    constructor () {
        this.homepPage = new HomePage();
        this.productPage = new ProductPage();
    }
}

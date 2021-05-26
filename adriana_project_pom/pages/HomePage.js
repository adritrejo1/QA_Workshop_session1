import { Selector } from 'testcafe'

class HomePage{ //or ProductsPage?
    constructor(){
        this.inventoryList = Selector('.inventory_list')
        this.burguerMenuBtn = Selector('#react-burger-menu-btn')
        this.burguerItemList = Selector('.bm-item-list')
        this.logOutBtn = Selector('#logout_sidebar_link')
        this.shoppingCartBtn = Selector('.shopping_cart_link')
        this.addToCartBackPackBtn = Selector('#add-to-cart-sauce-labs-backpack')
        //this.removeFromCartBtn = Selector('#remove-sauce-labs-backpack')
        this.addToCartBikeLightBtn = Selector('#add-to-cart-sauce-labs-bike-light')

    }
}

export default new HomePage()
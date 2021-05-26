import { Selector } from 'testcafe'

class CheckOutOverviewPage{
    constructor(){
        this.checkOutOverviewTitle = Selector('.title').withText('Checkout: Overview')
        this.cartListOverview = Selector('.cart_list')
        this.inventoryNameBackPackOverview = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.inventoryNameBikeLightOverview = Selector('.inventory_item_name').withText('Sauce Labs Bike Light')
        this.finishBtn = Selector('#finish')
        

    }
}

export default new CheckOutOverviewPage()
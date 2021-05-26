import { Selector, t } from 'testcafe'

class YourCartPage{
    constructor(){
        this.checkOutBtn = Selector('#checkout')
        this.inventoryNameBackPack = Selector('.inventory_item_name').withText('Sauce Labs Backpack')
        this.inventoryNameBikeLight = Selector('.inventory_item_name').withText('Sauce Labs Bike Light')
        

    }

   async getItemName(){
       return await this.inventoryNameBackPack.innerText
   }

}

export default new YourCartPage()
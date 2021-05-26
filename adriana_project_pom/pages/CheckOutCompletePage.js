import { Selector } from 'testcafe'

class CheckOutCompletePage{
    constructor(){
        this.checkOutCompleteTitle = Selector('.title').withText('Checkout: Complete!')
    }
}

export default new CheckOutCompletePage()
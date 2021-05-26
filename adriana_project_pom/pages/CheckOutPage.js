import { Selector, t } from 'testcafe'

class CheckOutPage{
    constructor(){
        this.checkOutTitle = Selector('.title').withText('Checkout: Your Information')
        this.firtsNameTxt = Selector('#first-name')
        this.lastNameTxt = Selector('#last-name')
        this.zipCodeTxt = Selector('#postal-code')
        this.continueBtn = Selector('#continue')
        this.errorMsg = Selector('h3').withText('Error')

    }

    async fillUserInformation(firstName, lastName, zipCode){

        await t
        .typeText(this.firtsNameTxt, firstName, {paste:true})
        .typeText(this.lastNameTxt, lastName, {paste:true})
        .typeText(this.zipCodeTxt, zipCode, {paste:true})
        .click(this.continueBtn)

    }

}
export default new CheckOutPage()
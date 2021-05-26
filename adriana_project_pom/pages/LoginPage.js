import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameTxt = Selector('#user-name')
        this.passwordTxt = Selector('#password')
        this.loginBtn = Selector('#login-button')
        this.errorMsg = Selector('.error-message-container')
        this.botDraw = Selector('.bot_column')
    }


    async submitLoginForm(username, password){
        await t
        .typeText(this.userNameTxt, username, {paste:true})
        .typeText(this.passwordTxt, password, {paste:true})
        .click(this.loginBtn)

    }
}

export default new LoginPage()
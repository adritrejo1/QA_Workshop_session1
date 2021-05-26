import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    
   

    test('1. Login with a valid user', async t => {
        
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(homePage.inventoryList.exists).ok()
    })


    test('2. Login with an invalid user', async t=>{
        
        await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
        await t.expect(loginPage.errorMsg.innerText).eql(MESSAGES.ERROR_MESSAGES.INVALID_LOGIN)

    })


    test('3. Logout from product´s page', async t=>{
           
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(homePage.burguerMenuBtn)
        await t.click(homePage.logOutBtn)
        await t.expect(loginPage.loginBtn.exists).ok

    })

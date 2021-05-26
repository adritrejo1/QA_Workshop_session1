import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import yourCartPage from '../pages/YourCartPage'
import checkOutPage from '../pages/CheckOutPage'
import checkOutOverviewPage from '../pages/CheckOutOverviewPage'
import { URLS, CREDENTIALS, USER_INFORMATION } from '../data/Constants'

fixture('User information test')
.page(`${URLS.LOGIN_PAGE}`)

test('7. Continue with missing mail information', async t=>{
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    //await t.expect(homePage.inventoryList.exists).ok
    await t.click(homePage.addToCartBackPackBtn)
    await t.click(homePage.shoppingCartBtn)
    await t.click(yourCartPage.checkOutBtn)
    await t.click(checkOutPage.continueBtn)
    await t.expect(checkOutPage.errorMsg.exists).ok

})

test('8. Fill user´s information', async t=>{
    await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    //await t.expect(homePage.inventoryList.exists).ok
    await t.click(homePage.addToCartBackPackBtn)
    await t.click(homePage.shoppingCartBtn)
    await t.click(yourCartPage.checkOutBtn)
    await checkOutPage.fillUserInformation(USER_INFORMATION.FIRST_NAME, USER_INFORMATION.LAST_NAME, USER_INFORMATION.ZIP_CODE)

    await t.expect(checkOutOverviewPage.checkOutOverviewTitle.exists).ok

})
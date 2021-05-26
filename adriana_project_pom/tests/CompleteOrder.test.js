import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import yourCartPage from '../pages/YourCartPage'
import checkOutPage from '../pages/CheckOutPage'
import checkOutOverviewPage from '../pages/CheckOutOverviewPage'
import CheckOutCompletePage from '../pages/CheckOutCompletePage'
import { URLS, CREDENTIALS, USER_INFORMATION } from '../data/Constants'

fixture('shopping cart feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t => {
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(homePage.addToCartBackPackBtn)
        await t.click(homePage.shoppingCartBtn)
    })

    test('9. Final order items', async t=>{
        const itemName = await yourCartPage.getItemName()
        await t.click(yourCartPage.checkOutBtn)
        await checkOutPage.fillUserInformation(USER_INFORMATION.FIRST_NAME, USER_INFORMATION.LAST_NAME, USER_INFORMATION.ZIP_CODE)
        await t.expect(checkOutOverviewPage.inventoryNameBackPackOverview.innerText).eql(itemName)
    })

    test('10. Complete a purchase', async t=>{
        await t.click(yourCartPage.checkOutBtn)
        await checkOutPage.fillUserInformation(USER_INFORMATION.FIRST_NAME, USER_INFORMATION.LAST_NAME, USER_INFORMATION.ZIP_CODE)
        await t.click(checkOutOverviewPage.finishBtn)
        await t.expect(CheckOutCompletePage.checkOutCompleteTitle.exists).ok

    })

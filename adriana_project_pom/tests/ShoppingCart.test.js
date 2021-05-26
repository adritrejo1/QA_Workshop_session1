import loginPage from '../pages/LoginPage'
import homePage from '../pages/HomePage'
import yourCartPage from '../pages/YourCartPage'
import { URLS, CREDENTIALS } from '../data/Constants'

fixture('shopping cart feature test')
    .page(`${URLS.LOGIN_PAGE}`)
    .beforeEach(async t =>{
        await loginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    })


    test('4. Navigate to the shopping cart', async t=>{
        await t.click(homePage.shoppingCartBtn)
        await t.expect(yourCartPage.checkOutBtn.exists).ok

    })

    test('5. Add a single item to the shopping cart', async t=>{
        await t.click(homePage.addToCartBackPackBtn)
        await t.click(homePage.shoppingCartBtn)
        await t.expect(yourCartPage.inventoryNameBackPack.exists).ok

    })

    test('6. Add multiple items to the shopping cart', async t=>{
        await t.click(homePage.addToCartBackPackBtn)
        await t.click(homePage.addToCartBikeLightBtn)
        await t.click(homePage.shoppingCartBtn)
        await t.expect(yourCartPage.inventoryNameBackPack.exists).ok
        await t.expect(yourCartPage.inventoryNameBikeLight.exists).ok

    })
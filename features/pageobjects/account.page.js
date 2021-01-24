import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get myPersonalInfo () { return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span')}
    get accFirstName() { return $('#firstname') }
    get accLastName() { return $('#lastname') }
    get searchBox() { return $('#search_query_top') }
    get selectedItem() { return $('//*[@id="center_column"]/ul/li[1]/div/div[2]/div[2]/a[1]/span') }
    get checkoutButton() { return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a') }
    get proceedCheckOut() { return $('//*[@id="center_column"]/p[2]/a[1]/span') }
    get addressCheckOut() { return $('#center_column > form > p > button > span') }
    get shippingCheckOut() { return $('#form > p > button > span') }
    get agreeCheckbox() { return $('//*[@id="form"]/div/p[2]/label') }
    get itemText() { return $('=Printed Chiffon Dress') }
}

export default new AccountPage();

import { Given, When, Then } from 'cucumber';

import LoginPage from '../pageobjects/login.page';
import AccountPage from '../pageobjects/account.page';

const pages = {
    login: LoginPage
}

Given(/^user on the (\w+) page$/, (page) => {
    pages[page].open()
});


When(/^user clicks on signin button$/, () => {
    //LoginPage.login(username, password)
    LoginPage.clickSignin()
});

When(/^user enters "(.+)"$/, (email) => {
    //LoginPage.login(username, password)
    email = Math.round(+new Date()/1000)+ "@gmail.com";
    LoginPage.enterEmail(email)
});

When(/^user clicks on createaccount button$/, () => {
    //LoginPage.login(username, password)
    LoginPage.clickCreateAccount()
});

When(/^user fills form with details with (\w+) and (\w+)$/, (username, surname) => {
    //LoginPage.login(username, password)
    LoginPage.fillFormDetails(username, surname)
    browser.pause(3000)
    //AccountPage.myPersonalInfo.click()
});

Then(/^deatils of (.+) and (.+) should be matched$/, (username,surname) => {
    console.log(username)
    console.log(surname)
    LoginPage.clickOnUserAccount.click()
    AccountPage.myPersonalInfo.click()
    expect(AccountPage.accFirstName.getValue()).toEqual(username);
    expect(AccountPage.accLastName.getValue()).toEqual(surname);
    
});

When(/^user checks for (.+)$/, (item) => {
    AccountPage.searchBox.setValue(item)
    browser.keys("Enter")
    
});

When(/^user adds (.+) to cart$/, (item) => {
    AccountPage.selectedItem.click()
    
});

When(/^user proceeds to checkout$/, () => {

    var parentWindow = browser.getWindowHandle()
    browser.pause(3000)
    var ID = browser.getWindowHandles()
    for(var i = 0; i< ID.length; i++){
        if( ID[i]!= parentWindow){
            browser.switchToWindow(ID[i])
            //browser.maximizeWindow()
            break;
        }
    }
    AccountPage.checkoutButton.click();
    browser.pause(3000)
    browser.switchToWindow(parentWindow)
    browser.pause(3000)

});

When(/^user continue till payments$/, () => {
    AccountPage.proceedCheckOut.click()
    AccountPage.addressCheckOut.click()
    browser.pause(3000)
    AccountPage.agreeCheckbox.click()
    AccountPage.shippingCheckOut.click()
    
});

Then(/^(.+) should match$/, (item) => {

    expect(AccountPage.itemText.getText()).toEqual(item)
    browser.pause(3000)
    
});


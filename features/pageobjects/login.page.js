import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get signInBtn () { return $('a[class="login"]') }
    get inputEmail() { return $('input[id="email_create"]') }
    get crtAcntBtn () { return $('i[class="icon-user left"]') }
    get inputTitle () { return $('#uniform-id_gender2') }
    get inputFirstName () { return $('#customer_firstname') }
    get inputLastName () { return $('#customer_lastname') }
    get inputPassword () { return $('#passwd') }
    get inputDay () { return $('#days') }
    get inputMonth () { return $('#months') }
    get inputYear () { return $('#years') }
    get inputAddressFirstName () { return $('#firstname') }
    get inputAddressLastName () { return $('#lastname') }
    get inputCompany () { return $('#company') }
    get inputAddress1 () { return $('#address1') }
    get inputAddress2 () { return $('#address2') }
    get inputCity () { return $('#city') }
    get inputState () { return $('#id_state') }
    get inputPostCode () { return $('#postcode') }
    get inputCountry () { return $('#id_country') }
    get inputAdditionalInfo () { return $('#other') }
    get inputPhone () { return $('#phone') }
    get inputMobile () { return $('#phone_mobile') }
    get inputAlias () { return $('#alias') }
    get clickRegister () { return $('#submitAccount > span') }
    get clickOnUserAccount() { return $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }
    clickSignin () {
        this.signInBtn.click();
    }
    enterEmail (email) {
        this.inputEmail.setValue(email);
    }
    clickCreateAccount () {
        this.crtAcntBtn.click();
    }
    fillFormDetails (username, surname) {
        this.inputTitle.click();
        this.inputFirstName.setValue(username);
        this.inputLastName.setValue(surname);
        this.inputPassword.setValue("userpass");
        this.inputDay.selectByIndex(20);
        this.inputMonth.selectByIndex(12);
        this.inputYear.selectByAttribute("value" , "1987");
        this.inputCompany.setValue("userpass");
        this.inputAddress1.setValue("user");
        this.inputAddress2.setValue("user");
        this.inputCity.setValue("userpass");
        this.inputState.selectByVisibleText("Indiana");
        this.inputPostCode.setValue("46001");
        this.inputCountry.selectByVisibleText("United States");
        this.inputAdditionalInfo.setValue("user");
        this.inputPhone.setValue("12345678");
        this.inputMobile.setValue("23345678");
        this.inputAlias.setValue("alias");
        this.clickRegister.click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        //return super.open('login');
        return super.open('');
    }
}

export default new LoginPage();

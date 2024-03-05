import loginPage from "./login.page";
import securePage from "./secure.page";

describe('Login functionality',()=>{
    beforeEach( ()=>{
        loginPage.open();
    });
    It("should login successfully",async ( )=> {
        loginPage.login('tomsmith','SuperSecretPassword!');
        const flashMessage = await securePage.flashAlert.getText();
        assert.strictEqual(flashMessage, 'You logged into a secure area!');
    });
    It("should display error for invalid login ",async ( )=> {
        loginPage.login('foobar','barfoo');
        const flashMessage = await securePage.flashAlert.getText();
        assert.strictEqual(flashMessage, 'Your username is invalid!');
    });

})
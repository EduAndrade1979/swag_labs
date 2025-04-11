import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/pages/loginPage';
import Utils from '../../../support/utils';
import Chance from 'chance';

const loginPage = new LoginPage();
const utils = new Utils();
const chance = new Chance();

Given('I am on the Login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.typeLoginCredencials(
    Cypress.env('username'),
    Cypress.env('password')
  );
});

Then('I am successfully logged in and redirected to the main page', () => {
  utils.verifyUrlPath('/inventory.html');
  loginPage.logout();
});

When('I enter an invalid and random username', () => {
  loginPage.typeLoginCredencials(
    chance.string({ length: 10 }),
    Cypress.env('password')
  );
});
Then(
  'I see the error message "Epic sadface: Username and password do not match any user in this service"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

When('I enter an invalid and random password', () => {
  loginPage.typeLoginCredencials(
    Cypress.env('username'),
    chance.string({ length: 12 })
  );
});
Then(
  'I see the error message "Epic sadface: Username and password do not match any user in this service"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

When('I enter a valid username but swap lowercase with uppercase', () => {
  loginPage.typeLoginCredencials(
    Cypress.env('username').toUpperCase(),
    Cypress.env('password')
  );
});
Then(
  'I see the error message "Epic sadface: Username and password do not match any user in this service"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

When('I enter a valid password but swap lowercase with uppercase', () => {
  loginPage.typeLoginCredencials(
    Cypress.env('username'),
    Cypress.env('password').toUpperCase()
  );
});
Then(
  'I see the error message "Epic sadface: Username and password do not match any user in this service"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

When('I leave the username field empty', () => {
  loginPage.typeLoginCredencials(undefined, Cypress.env('password'));
});
Then('I see the error message "Epic sadface: Username is required"', () => {
  loginPage.verifyErrorMessage();
});

When('I leave the password field empty', () => {
  loginPage.typeLoginCredencials(Cypress.env('username'), undefined);
});
Then('I see the error message "Epic sadface: Password is required"', () => {
  loginPage.verifyErrorMessage();
});

When(
  'I enter valid credentials but add spaces before and after the values',
  () => {
    let usernameWithSpace = ` ${Cypress.env('username')}`;
    let passwordWithSpace = `${Cypress.env('password')} `;
    loginPage.typeLoginCredencials(usernameWithSpace, passwordWithSpace);
  }
);
Then(
  'I see the error message "Epic sadface: Username and password do not match any user in this service"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

When('I enter valid credentials of a locked out user', () => {
  loginPage.typeLoginCredencials('locked_out_user', Cypress.env('password'));
});
Then(
  'I see the error message "Epic sadface: Sorry, this user has been locked out"',
  () => {
    loginPage.verifyErrorMessage();
  }
);

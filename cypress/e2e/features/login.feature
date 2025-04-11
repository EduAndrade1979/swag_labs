Feature: Login

    Scenario: Login - Valid credentials
        Given I am on the Login page
        When I enter valid credentials
        Then I am successfully logged in and redirected to the main page

    Scenario: Login - Invalid random username
        Given I am on the Login page
        When I enter an invalid and random username
        Then I see the error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login - Invalid random password
        Given I am on the Login page
        When I enter an invalid and random password
        Then I see the error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login - Valid username, but with upper/lowercase swap
        Given I am on the Login page
        When I enter a valid username but swap lowercase with uppercase
        Then I see the error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login - Valid password, but with upper/lowercase swap
        Given I am on the Login page
        When I enter a valid password but swap lowercase with uppercase
        Then I see the error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login attempt with empty username field
        Given I am on the Login page
        When I leave the username field empty
        Then I see the error message "Epic sadface: Username is required"

    Scenario: Login attempt with empty password field
        Given I am on the Login page
        When I leave the password field empty
        Then I see the error message "Epic sadface: Password is required"

    Scenario: Login attempt with spaces before/after credentials
        Given I am on the Login page
        When I enter valid credentials but add spaces before and after the values
        Then I see the error message "Epic sadface: Username and password do not match any user in this service"

    Scenario: Login attempt using a locked out user
        Given I am on the Login page
        When I enter valid credentials of a locked out user
        Then I see the error message "Epic sadface: Sorry, this user has been locked out"


# NOT IMPLEMENTED IN SWAG LABS APP
# Scenario: Exceeded number of login attempts
# Given I am on the Login page
# When I try to login more than 'X' times unsuccessfully
# Then I see the error message "XPTO"

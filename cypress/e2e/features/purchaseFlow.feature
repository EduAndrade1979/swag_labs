Feature: Complete Purchase flow

    Scenario: Successful purchase of a single product
        Given I am on the login page
        When I enter my username and password
        Then I should be redirected to the product list page
        When I select a product from the list
        And I view the product details
        And I add the product to the cart
        And I open the cart
        And I proceed to checkout
        And I enter my personal information
        And I continue to the checkout overview and finish purchase
        And I finalize the purchase and return to products page
        Then I should be redirected to the inventory page
        When I log out
        Then I should be redirected to the login page
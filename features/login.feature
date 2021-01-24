Feature: The automation practice website

  Scenario Outline: As a user, I can signin the website and do a checkout

    Given user on the login page
    When user clicks on signin button 
    When user enters "valid email"
    When user clicks on createaccount button
    When user fills form with details with <username> and <surname>
    When user checks for <item> 
    When user adds <item> to cart
    When user proceeds to checkout
    When user continue till payments
    Then <item> should match
    Then deatils of <username> and <surname> should be matched
    
    
    Examples:
      | username | surname|item                 |
      | Shruti   | Sharma |Printed Chiffon Dress|



      

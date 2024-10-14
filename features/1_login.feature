Feature: Login functionality

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see <message> alert message

    Examples:
      | email               | password  | message                            |
      | yolanda@gmail.com   | password  | "email" must be a valid email      |
      | yolanda@gmail.com   | yolandaap | Kredensial yang Anda berikan salah |

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be redirected to <page> page

    Examples:
      | email              | password | page      |
      | yolanda@gmail.com  | password | dashboard |

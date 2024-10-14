Feature: Login functionality

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see <message> alert message

    Examples:
      | email               | password  | message                            |
      | riezq.25@gmail.corn | password  | "email" must be a valid email      |
      | riezq.25@gmail.com  | katasandi | Kredensial yang Anda berikan salah |

  Scenario: Login with valid credentials
    Given I am on the login page
    When I login with <email> and <password>
    Then I should be redirected to <page> page

    Examples:
      | email              | password | page      |
      | riezq.25@gmail.com | password | dashboard |

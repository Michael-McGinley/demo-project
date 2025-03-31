Feature: greeting end-point

  Scenario: get default greeting

    Given url 'http://3000'
    When method GET
    Then assert responseStatus == 200
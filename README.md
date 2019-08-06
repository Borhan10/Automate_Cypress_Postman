# Cypress Automation

by Mohamed Ahmed Borhan, 2019/08/06

This project handle some use cases for the user to validate some scenarios on the [e-commerce site](https://www.bergfreunde.eu/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Download the repo

2. Import the the project in Visual studio code or any  

3. Make sure to install node and [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install) from the terminal

4. for windows run "npx Cypress run"

5. Check for detailed steps [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install)

6. Cypress Test Runner will open with all specs that created 

7. Press run all

### Prerequisites

1. Visual studio code 
2. Node Js
3. Cypress
4. Travis for CI

### pros and cons
Cypress is very useful tool for running tests but some times it need to run it many times to get actual results, it some times if there was internet connection or any api call failed 

### Test Cases in the code 

1. Item validations 

1.1 Check that item price displayed

1.2 Check that item title displayed 

1.3 Check that weight of the item is displayed

1.4 Check that item return policy displayed 

1.5 Check that users reviews are at least 1 

2. Cart validations 

2.1 Check that item price is like the item details price

2.2 Check that item title is like the item details price

2.3 Check that voucher code is not available


3. Checkout validations 

3.1 Check that login form appear

3.2 Check that Create account button appear

### CI

There is .travis.yml That is responsible for running the builds the first line in the script is responsible for running cypress scripts 

## Note
Some times in cypress you will need to rerun to get actual results 


## Built With

* [Postman](https://www.seleniumhq.org/projects/webdriver/) Used for running e2e tests 

* [Travis CI](https://Travis-ci.org) - Responsible for CI 

This is [my CI runs](https://Travis-ci.org/Borhan10/Automate_Cypress_Postman)


==================================================================================================================================================================================

# MarvelApi

This is a postman project make validation checks on  [Some Marvel Api's](https://developer.marvel.com/docs).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Download the repo

2. In this path Automate_Cypress_Postman/tests please find the attached collections 

3. Make sure to import Trivago.postman_collection.json to your postman collection

4. Make sure to import Trivago.Variables.postman_environment.json in the environment variables 

### Prerequisites

1. Postman


## Running the tests

1. Open postman 

2. Import Trivago.postman_collection.json to your postman collection

3. Import Trivago.Variables.postman_environment.json in the environment variables 

4. Change the data that you want to configure like the (time stamp , apikey ...) from the environment variables

5. Create new runner in postman from this collection

6. Make sure that all the requests are selected 

7. Configure your runner settings (number of iterations, environment , delay,...)

8. Press Run

### Test Cases in the code 

1. Test for all authorization error codes listed [here](https://developer.marvel.com/documentation/authorization) with their
correct error message for [series api](https://developer.marvel.com/docs#!/public/getSeriesCollection_get_25)

2. Verify the status code is equal to 200 and that the response
payload matches the Comic type definition (first level only, not going deeper into CharacterList
or other types, only confirming that it is a list with items) for [specific Comic api](https://developer.marvel.com/docs#!/public/getComicIndividual_get_7)

3. Verify the name of a character is "Spider-Man
(Ultimate)" and that the last modification was later than January 2014. Please also ensure,
that the provided thumbnail is a valid image URL for [specific Character api](https://developer.marvel.com/docs#!/public/getCharacterIndividual_get_1)

4. Verify that calling invalid endpoint should NOT return "Spider-Man (Ultimate)" as well but a 404 status code 


### CI

There is .travis.yml That is responsible for running the builds the second line in the script is responsible for running postman collections 

You will need Newman installed in your local machine if you will run the collection throw command line or Jenkins locally  

## Built With

* [Postman](https://www.seleniumhq.org/projects/webdriver/) Used for running api tests and collections 

* [Travis CI](https://Travis-ci.org) - Responsible for CI 


### Access on Repository 

* The repository is private if access needed please contact me throw borhan_m7amed@live.com

* Both of the projects are running with one build using the .yml file commands 
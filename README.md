# webdriverIO
## Requirements: 
This project was developed in visual studio code
Run commands are executed in gitBash


## Folder Structure: 
Features folder contains 
 	pageobjects - folder to maintain all page objects.
		login.page.js - contains all objects related to registration
		account.page.js - contains objects related to checkout related validations

	step-definitions - folder contains step definitions for login feature
	login.feature - a feature file contains the feature along with scenarios
node.modules - all required modules are located
Reports - main folder for capturing allure report
	allure-results - contains all step related results
	Screenshots - captures screenshot after execution of each step defination
package.json - all required dependencies
wdio.conf.js - all configuration items


## How to run:
right click on package.json, open in integrated terminal and choose git bash terminal from drop down


## Commands to Run:
### to run the scenario: npm run test
### to view html allure report: npm run open-allure

const sum = (a, b) =>a+b;

export default sum;



/* Different types of testing:
*  Manual testing
*  Automation testing
*  Selenium testing
*  end-to-end testing
*  Unit testing
*  Integration testing
*  and  more
*
*/


/* Steps of React Testing:
* Install React Testing Library
* Install jest
* configure Jest => two ways - (1.) Manually  (2.) using `npx jest --init
* Install jest-environment-jsdom => because it is separated after 28 version of jest.
* Create folder for testing `__tests__` => because This is general convention.
* Create first test
* configure babel - for import 
* expect sum test
* Add coverage in gitignore
* configure babel again - for jsx enable
* For Image testing = configure jest.config.js [moduleNameMapper] and  create mock image = for image compatible
* For testing the api data we created mock data and fetched that data through global.fetch = jest.fn()
* And after that we did integration testing , where we deal with more than one component and also used render, waitFor, fireEvent.
* we used `toBeInTheDocument` which is coming from "@testing-library/jest-dom" before using that we installed this library `@testing-library/jest-dom`.
* And we created many test case.
* 
* NOTE [READ FIRST] => WE EXHAUST TO USE `npm run test` : then, we add one script in package.json => "watch-test": "jest --watch" . Now, we don't need to run command npm run test if want to run test then, we will npm run watch-test one time and after that we will press w for updating the test or for running any other test

*/
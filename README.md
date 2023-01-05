# 🎭 [Playwright](https://playwright.dev/docs/intro) - KNOW YOUR PRODUCT


## 🔨 Build your own

Clone the project on your local computer;

1. If you don t have `brew` on your local, you must set HomeBrew into your computer before installing Git.This video can help you how to install HomeBrew (https://www.youtube.com/watch?v=9CYT8uKaSdQ)
2. Install Git. Read this brief document(https://git-scm.com/download/mac)
3. Create a folder on your desktop or anywhere. The file name is not important, you can give it whatever you want. For example; Pisano
4. Open Terminal and access the created folder using cd and ls commands. This video can help you(https://www.youtube.com/watch?v=DvwWJw6Ppns)
5. When you open your folder location on Terminal run this command `git clone https://github.com/Pisano/pisano-playwright-framework.git`
6. Wait until the cloning process complete. When the process complete successfully everything is OK


## 🧰 Starting up

How to open project;

1. Install Node.js and set up on your computer.(https://nodejs.org/en/download/)
2. Install Visual Studio Code and set up on your computer.(https://code.visualstudio.com/download) 
3. Open Visual Studio Code and click the **File** button from the navbar in the upper left corner. Then click **Open Folder** and select your cloned project
4. Open Visual Studio Code Terminal and Install the dependencies using `npm install`
5. Install playwright `npx playwright install`
6. To run the project type this code into the terminal `npm run pw:test`


## 📁 Structure

```sh
 |- api # includes our api structure
 |- config # Configuration files
 |- fixtures # Predefined fixture sets & e.g pdf,csv,json files etc.
 |- playwright/pages # Sets of pages for page object model(Define locaters here)
 |- tests # Here is the magic 🧙‍♂️
 |- global-setup # To set something up once before running all tests
 |- global-teardown # To run something once after all the tests
 |- playwright-config # specify any options as globally configuration 
 |- package.json # includes our npm scripts and dependencies
```


## 📜 Pages

For the suite template we chose to follow the PageObjects pattern in order to define each pages internal structure and responsibilities inside its own highly cohesive class file.
That means that for each page we would define a new Page object for our needs


## 🔬 Using selectors

Playwright provides all the goodies of a selector engine, so as to make it really easy to target elements on the document. As a general guideline for querying inside our tests/Page objects:

1. Don't prefer  `page.getByText('Submit').press('Enter')` etc.Test can be run in different language so we don't get error because of locaters

Also you can take a look at Playwright's take on [selection best practices](https://playwright.dev/docs/locators#locate-by-css-or-xpath).


## 🎬 Debugging

Playwright provides a couple of great debugging capabilities at all levels. The ones that you will probably find most useful are:

- Setting the npm script "pw:test": "ENV=1 NAME=test@gmail.com PASS=user_pass npx playwright test --debug --project=chrome-test",

For more options take a look at https://playwright.dev/docs/debug


## 👔 Maybe help you 

 - playwright documantation - https://playwright.dev/docs/intro
 - Faker.js - https://fakerjs.dev/api/
 - Axios - https://axios-http.com/docs/intro

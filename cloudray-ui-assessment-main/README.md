## Prerequisites

Before running this project, ensure that you have the following prerequisites installed and configured:

1. Node.js and npm (version v20.11.0)
   - Installation instructions: [Node.js official website](https://nodejs.org/)
2. WebDriverIO (version 8.32.4 )
   - Installation: `npm install @wdio/cli`
3. Visual Studio Code: Download and install Visual Studio Code from the official website: (https://code.visualstudio.com/download)
4. Chrome or Firefox web browser (latest version)
   - Download: [Google Chrome](https://www.google.com/chrome/) | [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
5. Git 
    - provide commands like git config --global user.name "Your Name" and git config --global user.email "youremail@example.com".


    ## Logging into the Secure Area

To test the login functionality of The Internet Guinea Pig Website, follow these steps:

1. Ensure you are on the login page of the website.
2. Enter the username and password as provided in the examples below.
3. Check if the flash message displayed matches the expected message.

### Example Scenarios

#### Scenario 1: Successful Login

- **Username:** tomsmith
- **Password:** SuperSecretPassword!
- **Expected Message:** You logged into a secure area!

#### Scenario 2: Invalid Login

- **Username:** foobar
- **Password:** barfoo
- **Expected Message:** Your username is invalid!



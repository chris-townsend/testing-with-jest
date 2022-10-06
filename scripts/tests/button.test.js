/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });

    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});

// How to add Jest 

/**
 * 1. Type 'npm init' into the terminal
 * 2. Press enter to keep the defaults
 * 3. Add 'jest' to test command: option 
 * 4. To instal jest type 'npm install --save-dev jest@26.6.3' into the terminal
 * 5. Type 'npm test' and no tests will be found
 * 6. Add scripts folder with js folder and tests folder with similar test name.
 * 7. Tests go in test folder
 * 
 */
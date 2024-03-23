#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
do {
    const answers = await inquirer.prompt([
        { type: "number", name: "numberOne", message: "Enter first number: " },
        { type: "number", name: "numberTwo", message: "Enter second number: " },
        {
            type: "list",
            name: "operator",
            message: "Select Operator!",
            choices: ["+", "-", "*", "/"],
        },
    ]);
    const { numberOne, numberTwo, operator } = answers;
    let result;
    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        default:
            console.log("Invalid");
            break;
    }
    console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));
    var proceed_further = await inquirer.prompt([
        {
            input: "input",
            name: "cont",
            message: chalk.bgRedBright("\n Do you want to continue?: Yes / No")
        }
    ]);
} while (proceed_further.cont.toLowerCase() === "yes" || proceed_further.cont.toLowerCase() === "y");

#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "equal_age",
    type: "number",
    message: "please enter your age in this"
});
let ages1 = 18;
if (ages1 == answer.equal_age || ages1 >= answer.equal_age && 40 <= answer.equal_age) {
    console.log("you are eligible to submit form");
    let survey1 = await inquirer.prompt([
        {
            message: chalk.green("Please Enter Your FullName"),
            type: "input",
            name: "fullname",
        },
        {
            message: chalk.blueBright("Please Enter your Surname"),
            type: "input",
            name: "Surname",
        },
        {
            message: chalk.yellow("Please Enter Your Age"),
            type: "number",
            name: "Age",
        },
        {
            message: chalk.green("Please Enter your phone Number"),
            type: "number",
            name: "phone",
        },
        {
            message: chalk.blackBright("Please Enter your Email Address"),
            type: "input",
            name: "Email Address",
        },
        {
            message: chalk.whiteBright("Please Enter Your Qualification"),
            type: "list",
            name: "Qualification",
            choices: ["Middle", "Matric", "FSC", "BSC"],
        },
        {
            message: chalk.cyanBright("Please add Your specialization"),
            type: "input",
            name: "specialization",
            validate: (ans) => {
                if (!ans) {
                    return "please enter name first";
                }
                return true;
            },
        },
    ]);
    console.log(chalk.blueBright("Congratulation You Submit form Successfully"));
}
else {
    console.log("you are not eligible");
}

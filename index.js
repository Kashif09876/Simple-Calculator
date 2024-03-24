#! /user/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Ener first Number", type: "number", name: "firstnumber" },
    { message: "Ener second number", type: "number", name: "Secondnumber" },
    {
        message: " Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
// condtional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.Secondnumber);
}

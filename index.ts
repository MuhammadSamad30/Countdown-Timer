#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright("\t\n                        Welcome To The Countdown Timer From Muhammad Samad"));
console.log();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

// Main countdown function
const countdown = async (seconds: number) => {
  console.log(chalk.yellowBright(`Starting countdown for ${formatTime(seconds)}...`));
  while (seconds > 0) {
    console.log(formatTime(seconds));
    await sleep(1000);
    seconds--;
  }
  console.log(chalk.redBright("Time's up!"));
  
  console.log(chalk.greenBright("\t\n                                  Thanks For Using This App"));
  
  
};

const promptUser = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "minutes",
      message: chalk.blue("Enter countdown time in minutes:"),
      validate: (input) => {
        const value = parseInt(input, 10);
        if (isNaN(value) || value < 0) {
          return chalk.red("Please enter a valid positive number");
        }
        return true;
      },
    },
  ]);

  const minutes = parseInt(answers.minutes, 10);
  const totalSeconds = minutes * 60;
  await countdown(totalSeconds);
};

promptUser();

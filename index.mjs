#!/usr/bin/env node

/**
 * The length of the border line (stars) to generate.
 * The actual border length will be this value plus 1
 * (to account for the slashes).
 * @constant {number}
 */
const LENGTH = 64;

/**
 *
 * @param {string} message The message to display in the box.
 * @param {boolean} uppercase Whether to convert the message to uppercase.
 *                            Defaults to true.
 * @param {boolean} singleLine Whether to output a single line header.
 *                             Defaults to false.
 * @return {void}
 * @example
 * main("hello world");
 * main("hello world", true, true);
 */
function main(message, uppercase = true, singleLine = false) {
  if (uppercase) message = message.toUpperCase();

  if (singleLine) {
    // Single line format: /*** MESSAGE ***/
    const totalLength = LENGTH + 1; // +1 to match the original border length
    const contentLength = message.length + 2; // +2 for spaces around message
    const starsNeeded = totalLength - contentLength - 2; // -2 for the slashes
    const leftStars = Math.floor(starsNeeded / 2);
    const rightStars = starsNeeded - leftStars;
    const result = `/${"*".repeat(leftStars)} ${message} ${"*".repeat(rightStars)}/`;
    console.log(result);
  } else {
    // Original three-line format
    const border = "*".repeat(LENGTH);
    const content = `${" ".repeat(
      Math.max(0, Math.floor((LENGTH - message.length) / 2))
    )}${message}`;
    const result = `/${border}\n${content}\n${border}/`;
    console.log(result);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
let singleLine = false;
let messageArgs = [];

// Check for -s flag
for (let i = 0; i < args.length; i++) {
  if (args[i] === "-s") {
    singleLine = true;
  } else {
    messageArgs.push(args[i]);
  }
}

const message = messageArgs.join(" ");
if (!message) {
  console.error("Please provide a message as an argument.");
  console.error("Example: npx @chan_alston/headers@latest hello world");
  console.error("Example: npx @chan_alston/headers@latest -s hello world");
  process.exit(1);
}

// If this file is run directly, execute the main function
main(message, true, singleLine);

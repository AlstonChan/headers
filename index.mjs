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
 * @param {boolean} output Whether to output the result to the console.
 *                         Defaults to true.
 * @return {void}
 * @example
 * main("hello world");
 */
function main(message, uppercase = true) {
  if (uppercase) message = message.toUpperCase();

  const border = "*".repeat(LENGTH);
  const content = `${" ".repeat((LENGTH - message.length) / 2)}${message}`;
  const result = `/${border}\n${content}\n${border}/`;

  console.log(result);
}

// Remove the first two elements from process.argv
const message = process.argv.slice(2).join(" ");
if (!message) {
  console.error("Please provide a message as the first argument.");
  console.error("Example: npx @chan_alston/headers@latest hello world");
  process.exit(1);
}

// If this file is run directly, execute the main function
main(message, true, true);

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
 * @param {boolean} slashesOnly Whether to use slashes instead of asterisks.
 *                              Defaults to false.
 * @return {void}
 * @example
 * main("hello world");
 * main("hello world", true, true); // single line
 * main("hello world", true, true, true); // slashes only
 */
function main(message, uppercase = true, singleLine = false, slashesOnly = false) {
  if (uppercase) message = message.toUpperCase();

  const fillChar = slashesOnly ? "/" : "*";

  if (singleLine) {
    // Single line format: /*** MESSAGE ***/ or //// MESSAGE ////
    const totalLength = LENGTH + 1; // +1 to match the original border length
    const contentLength = message.length + 2; // +2 for spaces around message
    const fillNeeded = totalLength - contentLength - 2; // -2 for the outer slashes
    const leftFill = Math.floor(fillNeeded / 2);
    const rightFill = fillNeeded - leftFill;
    const result = `/${fillChar.repeat(leftFill)} ${message} ${fillChar.repeat(
      rightFill
    )}/`;
    console.log(result);
  } else {
    // Three-line format with asterisks or slashes
    const border = fillChar.repeat(LENGTH);
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
let slashesOnly = false;
let messageArgs = [];

// Check for flags
for (let i = 0; i < args.length; i++) {
  if (args[i] === "-s") {
    singleLine = true;
  } else if (args[i] === "--slashes") {
    slashesOnly = true;
  } else {
    messageArgs.push(args[i]);
  }
}

const message = messageArgs.join(" ");
if (!message) {
  console.error("Please provide a message as an argument.");
  console.error("Example: npx @chan_alston/headers@latest hello world");
  console.error("Example: npx @chan_alston/headers@latest -s hello world");
  console.error("Example: npx @chan_alston/headers@latest --slashes hello world");
  console.error("Example: npx @chan_alston/headers@latest -s --slashes hello world");
  process.exit(1);
}

// If this file is run directly, execute the main function
main(message, true, singleLine, slashesOnly);

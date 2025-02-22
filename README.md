# Incorrect setInterval usage in React useEffect hook

This repository demonstrates a common mistake when using `setInterval` within a React `useEffect` hook.  The problem stems from how closures work in JavaScript. The callback function passed to `setInterval` does not capture the current value of `setCount` but instead, captures the value of setCount that it had at the time the interval was cleared.  This causes the counter to only update after the loop has finished, often resulting in unexpected behavior or no update at all.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the counter value doesn't increment every second as expected.

## Solution

The solution involves using a functional update within the `setCount` call to ensure that the counter updates correctly.  This pattern guarantees that the counter increments based on the most recent state value.
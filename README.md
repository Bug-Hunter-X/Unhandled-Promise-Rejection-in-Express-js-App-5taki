# Unhandled Promise Rejection in Express.js App

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections caused by errors during asynchronous operations.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version.

## Problem

The `getData` function simulates an asynchronous operation (e.g., database query, API call) that may fail.  The original code lacks proper error handling, leading to crashes when the asynchronous operation fails.  The application does not gracefully handle the error scenario.

## Solution

The `bugSolution.js` file demonstrates how to properly handle errors in asynchronous operations using try-catch blocks and promises to prevent crashes and provide a more robust user experience. Error handling is crucial for the stability and reliability of applications.
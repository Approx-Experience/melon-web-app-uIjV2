// src/setupTests.js
import "@testing-library/jest-dom/vitest"; // Import the custom DOM matchers for Vitest
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Runs cleanup after each test to unmount React components and clean up the DOM
// This prevents tests from interfering with each other
afterEach(() => {
  cleanup();
});

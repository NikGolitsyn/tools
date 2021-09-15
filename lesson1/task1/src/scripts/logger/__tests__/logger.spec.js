import { createLogger } from "../logger.js";

it("should return stored logs", () => {
  const logger = createLogger("user login");
  expect(logger.getLogs()).toEqual([]);
});

it("should save log message", () => {
  const logger = createLogger("user login");
  logger.log("Login success");

  expect(logger.getLogs()).toEqual(["log - user login - Login success"]);
});

it("should save errors", () => {
  const logger = createLogger("user login");
  logger.error("Login failed");

  expect(logger.getLogs()).toEqual(["error - user login - Login failed"]);
});

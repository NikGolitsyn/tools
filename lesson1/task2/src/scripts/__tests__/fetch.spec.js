import { baseUrl } from "../tasksGateway.js";

it("Should return promise with an array of objects in result", () => {
  expect(fetch(baseUrl)).resolves.toBe([
    {
      text: "Task 3",
      createDate: "2021-09-14T10:56:08.192Z",
      done: true,
      id: "3",
      finishDate: "2021-09-15T12:32:07.684Z",
    },
    {
      text: "Task 4",
      createDate: "2021-09-14T11:18:07.936Z",
      done: false,
      id: "4",
    },
  ]);
});

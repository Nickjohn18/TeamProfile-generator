const Employee = require("../lib/employee");

test("Check to see if the input given is a string", () => {
  const name = "Nick";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("Check to see if the input given is a number", () => {
  const id = 22;
  const test = new Employee("Nick", id);
  expect(test.id).toBe(id);
});

test("Check to see if the input given is an email", () => {
  const email = "nick@test.com";
  const test = new Employee("Nick", 22, email);
  expect(test.email).toBe(email);
});

test("Check to see if the value return corresponds to the appropriate title", () => {
  const title = "Employee";
  const test = new Employee("Nick", 22, "nick@test.com");
  expect(test.getRole()).toBe(title);
});

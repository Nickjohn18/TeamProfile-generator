const Manager = require("../lib/manager");

test("Check to see if the input given is a string", () => {
  const name = "Nick";
  const test = new Manager(name);
  expect(test.name).toBe(name);
});

test("Check to see if the input given is a number", () => {
  const id = 22;
  const test = new Manager("Nick", id);
  expect(test.id).toBe(id);
});

test("Check to see if the input given is an email", () => {
  const email = "nick@test.com";
  const test = new Manager("Nick", 22, email);
  expect(test.email).toBe(email);
});

test("Check to see if the value return corresponds to the appropriate title", () => {
  const title = "Manager";
  const test = new Manager("Nick", 22, "nick@test.com");
  expect(test.getRole()).toBe(title);
});

test("Check to see if the value given is a github account", () => {
  const officeNumber = 69;
  const test = new Manager("Nick", 22, "nick@test.com", officeNumber);
  expect(test.getOfficeNumber()).toBe(officeNumber);
});

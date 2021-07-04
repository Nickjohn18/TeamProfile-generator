const Engineer = require("../lib/engineer");

test("Check to see if the input given is a string", () => {
  const name = "Nick";
  const test = new Engineer(name);
  expect(test.name).toBe(name);
});

test("Check to see if the input given is a number", () => {
  const id = 22;
  const test = new Engineer("Nick", id);
  expect(test.id).toBe(id);
});

test("Check to see if the input given is an email", () => {
  const email = "nick@test.com";
  const test = new Engineer("Nick", 22, email);
  expect(test.email).toBe(email);
});

test("Check to see if the value return corresponds to the appropriate title", () => {
  const title = "Engineer";
  const test = new Engineer("Nick", 22, "nick@test.com");
  expect(test.getRole()).toBe(title);
});

test("Check to see if the value given is a github account", () => {
  const github = "nickjohn18";
  const test = new Engineer("Nick", 22, "nick@test.com", github);
  expect(test.getGitHub()).toBe(github);
});

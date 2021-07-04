const Intern = require("../lib/intern");

test("Check to see if the input given is a string", () => {
  const name = "Nick";
  const test = new Intern(name);
  expect(test.name).toBe(name);
});

test("Check to see if the input given is a number", () => {
  const id = 22;
  const test = new Intern("Nick", id);
  expect(test.id).toBe(id);
});

test("Check to see if the input given is an email", () => {
  const email = "nick@test.com";
  const test = new Intern("Nick", 22, email);
  expect(test.email).toBe(email);
});

test("Check to see if the value return corresponds to the appropriate title", () => {
  const title = "Intern";
  const test = new Intern("Nick", 22, "nick@test.com");
  expect(test.getRole()).toBe(title);
});

test("Check to see if the value given is a valid school", () => {
  const school = "University of Central Florida";
  const test = new Intern("Nick", 22, "nick@test.com", school);
  expect(test.getSchool()).toBe(school);
});

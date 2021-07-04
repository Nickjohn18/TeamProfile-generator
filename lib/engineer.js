class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.title = "Engineer";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }

  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;

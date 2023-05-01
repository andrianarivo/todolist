export default class Task {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = -1;
  }
}

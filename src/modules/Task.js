export default class Task {
  constructor(index = 1, description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

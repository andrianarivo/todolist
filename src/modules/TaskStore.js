export default class TaskStore {
  constructor() {
    this.tasksArray = [];
  }

  getNextIndex() {
    return this.tasksArray.length;
  }

  addTask(task) {
    this.tasksArray.push(task);
  }

  removeTask(index) {
    this.tasksArray = this.tasksArray.filter((task) => Number(task.index) !== Number(index));
    this.tasksArray.sort((task1, task2) => task1.index - task2.index);
    this.tasksArray.forEach((task, idx) => {
      task.index = idx;
    });
  }

  editTask(index, newDescription) {
    this.tasksArray[index].description = newDescription;
  }

  // Show books in DOM
  render() {
    let content = ` 
      <li class="list-group-item d-flex justify-content-between align-items-baseline">
        <h5>Today's To Do</h5>
          <a id="reload-tasks" href="#"><i class="fa-solid fa-rotate"></i></a>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-baseline">
        <input id="add-new-task" placeholder="Add to your list..." />
        <a id="btn-add-task" href="#"><i class="fa-solid fa-arrow-right-to-bracket"></i></a>
      </li>`;
    this.tasksArray.sort((task1, task2) => task1.index - task2.index);
    this.tasksArray.forEach((task) => {
      content += `
      <li class="task-item list-group-item d-flex justify-content-between align-items-baseline" id="${task.index}">
        <div class="d-flex gap-2 align-items-baseline">
          <input type="checkbox" class="task-completed form-check-input" ${task.completed ? 'checked' : ''}/>
          <p class="task-title ${task.completed ? 'text-decoration-line-through' : ''}">${task.description}</p>
        </div>
        <a class="move-task" href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
      </li>`;
    });
    return content;
  }

  // Check if empty
  empty() {
    return this.tasksArray.length === 0;
  }
}

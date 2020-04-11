import Todo from "@/models/todo";
export default class TodoManager {
  constructor(...taskNameList) {
    this.list = taskNameList.map(taskName => new Todo(taskName));
  }

  find(id) {
    const task = this.list.find(todo => todo.id === id);
    if (task) {
      return task;
    } else {
      return false;
    }
  }

  findIndex(id) {
    return this.list.findIndex(todo => todo.id === id);
  }

  add(taskName) {
    if (taskName.length > 0) {
      this.list.push(new Todo(taskName));
    }
  }

  toggle(id) {
    const todo = this.find(id);
    if (todo) {
      todo.toggle();
    }
  }

  delete(id) {
    const index = this.findIndex(id);
    if (index >= 0) {
      this.list.splice(index, 1);
    }
  }
}

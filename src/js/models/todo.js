class Todo {
  constructor(task) {
    this.id = Math.random();
    this.task = task;
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}

export default Todo;

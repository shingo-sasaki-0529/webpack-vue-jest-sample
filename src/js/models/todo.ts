class Todo {

  id: number
  task: string
  done: boolean

  constructor(task: string) {
    this.id = Math.random();
    this.task = task;
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}

export default Todo;

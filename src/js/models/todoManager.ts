import Todo from "@/models/todo";
export default class TodoManager {

  list: Todo[]

  constructor(...taskNameList: string[]) {
    this.list = taskNameList.map(taskName => new Todo(taskName))
  }

  find(id: number): Todo | false {
    const task = this.list.find(todo => todo.id === id);
    if (task) {
      return task;
    } else {
      return false;
    }
  }

  findIndex(id: number) {
    return this.list.findIndex(todo => todo.id === id);
  }

  add(taskName: string) {
    if (taskName.length > 0) {
      this.list.push(new Todo(taskName));
    }
  }

  toggle(id: number): Boolean {
    const todo = this.find(id);
    if (todo) {
      todo.toggle();
      return true;
    } else {
      return false;
    }
  }

  delete(id: number) {
    const index = this.findIndex(id);
    if (index >= 0) {
      this.list.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

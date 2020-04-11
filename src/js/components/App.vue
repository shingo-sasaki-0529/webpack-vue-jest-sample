<template>
  <div>
    <section>
      <input v-model="newTaskName" type="text" />
      <button @click="addTodo">追加</button>
    </section>
    <section>
      <div :key="todo.id" v-for="todo in todoList">
        <Todo
          :task="todo.task"
          :done="todo.done"
          @onClickDeleteButton="() => deleteTodo(todo.id)"
          @onClickDoneButton="() => doneTodo(todo.id)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  components: { Todo },
  data() {
    return {
      newTaskName: '',
      todoList: [
        {
          id: Math.random(),
          task: '歯を磨く',
          done: false
        },
        {
          id: Math.random(),
          task: '風呂入る',
          done: false
        },
        {
          id: Math.random(),
          task: '寝る',
          done: false
        },
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTaskName.length > 0) {
        this.todoList.push({
          id: Math.random(),
          task: this.newTaskName,
          done: false
        })
        this.newTaskName = ""
      }
    },
    doneTodo(id) {
      const todo = this.todoList.find((t) => t.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    deleteTodo(id) {
      const index = this.todoList.findIndex((t) => t.id === id)
      if (index >= 0) {
        this.todoList.splice(index, 1)
      }
    }
  }
}
</script>
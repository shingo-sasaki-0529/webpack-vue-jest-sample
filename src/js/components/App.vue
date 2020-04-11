<template>
  <div>
    <section>
      <input v-model="newTaskName" type="text" />
      <button @click="addTodo">追加</button>
    </section>
    <section>
      <div :key="todo.id" v-for="todo in todoList">
        <VTodo
          :todo="todo"
          @onClickDeleteButton="() => deleteTodo(todo.id)"
          @onClickDoneButton="() => doneTodo(todo.id)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import VTodo from './VTodo'
import Todo from '@/models/todo'
export default {
  components: { VTodo },
  data() {
    return {
      newTaskName: '',
      todoList: [
        new Todo('風呂はいる'),
        new Todo('歯を磨く'),
        new Todo('寝る'),
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTaskName.length > 0) {
        this.todoList.push(new Todo(this.newTaskName))
        this.newTaskName = ""
      }
    },
    doneTodo(id) {
      const todo = this.todoList.find((t) => t.id === id)
      if (todo) {
        todo.toggle()
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
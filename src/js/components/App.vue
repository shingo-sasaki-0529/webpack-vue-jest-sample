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
          @onClickToggleButton="() => toggleTodo(todo.id)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import VTodo from './VTodo'
import TodoManager from '@/models/todoManager';
export default {
  components: { VTodo },
  data() {
    return {
      newTaskName: '',
      todoManager: new TodoManager('風呂はいる', '歯磨く', '寝る')
    }
  },
  computed: {
    todoList() {
      return this.todoManager.list
    }
  },
  methods: {
    addTodo() {
      this.todoManager.add(this.newTaskName)
      this.newTaskName = ""
    },
    toggleTodo(id) {
      this.todoManager.toggle(id)
    },
    deleteTodo(id) {
      this.todoManager.delete(id)
    }
  }
}
</script>
<template>
  <div class="v-todo">
    <label class="task" :class="{ done: todo.done }">{{ todo.task }}</label>
    <button @click="$emit('onClickToggleButton')">Toggle</button>
    <button @click="$emit('onClickDeleteButton')">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.task.done {
  text-decoration: line-through;
}
</style>

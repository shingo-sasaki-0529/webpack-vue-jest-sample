<template>
  <div class="v-todo">
    <label class="task" :class="{ done: todo.done }">{{ todo.task }}</label>
    <button class="toggle" @click="$emit('onClickToggleButton')">Toggle</button>
    <button class="delete" @click="$emit('onClickDeleteButton')">Delete</button>
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

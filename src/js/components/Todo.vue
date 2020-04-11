<template>
  <div>
    <label class="task" :class="{ done }">{{ task }}</label>
    <button @click="$emit('onClickDoneButton')">Done!!</button>
    <button @click="$emit('onClickDeleteButton')">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
.task.done {
  text-decoration: line-through;
}
</style>

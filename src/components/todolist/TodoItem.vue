<template>
  <li class="list-group-item">
    <div class="form-check text-start clearfix position-relative">
      <input class="form-check-input" type="checkbox" :id="todo.id" @click="$emit('checkedTodo', todo.id)" :checked="todo.compeleted">
      <label class="form-check-label pe-4" :class="{'text-decoration-line-through': todo.compeleted}" :for="todo.id">{{ todo.name }}</label>
      <button class="border-0 bg-transparent float-end position-absolute end-0 top-0" @click="$emit('deleteTodo', todo.id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  emits: ['checkedTodo', 'deleteTodo'],
  props: {
    todo: {
      type: Object
    }
  }
}
</script>

<style>

</style>
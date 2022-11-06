<template>
  <div class="container">
    <form @submit="handleAddTodo">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">待辦事項</span>
        <input v-model.trim="todoInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="準備要做的任務" required>
        <button class="btn btn-primary" type="submit" id="button-addon1">新增</button>
      </div>
    </form>

    <div class="card bg-light">
      <ul class="nav nav-tabs px-3 pt-3">
        <li class="nav-item" v-for="tab in tabs" :key="tab.currentFilter">
          <button class="nav-link" :class="{'active': currentFilter === tab.filterName}" @click="setCurrentFilter(tab.filterName)">{{ tab.name }}</button>
        </li>
      </ul>
      <ul class="list-group border-top-0 list-group-flush">
        <template v-if="todoList.length === 0">
          <li class="list-group-item py-4">尚無任務</li>
        </template>

        <template v-else>
          <TodoItem
            v-for="todo in todoFilterList"
            :key="todo.id"
            :todo="todo"
            @deleteTodo="deleteTodo"
            @checkedTodo="checkedTodo"
          />
        </template>

        <li v-if="todoList.length > 0 && todoFilterList.length === 0" class="list-group-item">
          <div v-if="currentFilter === 'compeleted'" class="py-4">尚無已完成的任務</div>
          <div v-else-if="currentFilter === 'doing'" class="py-4">尚無進行中的任務</div>
        </li>

        <li v-if="todoList.length > 0" class="list-group-item d-flex align-items-center bg-light">
          <div v-if="unCompeletedCount > 0">還有 {{ unCompeletedCount }} 筆任務未完成</div>
          <button type="button" class="border-0 bg-transparent text-primary ms-auto" @click="clearTodos">清除所有任務</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { v4 as uuidv4} from 'uuid'
import TodoItem from './TodoItem.vue'

const createTodo = (name = '') => {
  return {
    id: uuidv4(),
    name,
    compeleted: false,
    edit: false,
    compeletedText: ''
  }
}
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  setup () {
    const currentFilter = ref('all')
    const todoInput = ref('')
    const tabs = [
      { filterName: 'all', name: '全部' },
      { filterName: 'doing', name: '進行中' },
      { filterName: 'compeleted', name: '已完成' },
      
    ]
    const todoList = ref([])

    const todoFilterList = computed(() => {
      return todoList.value.filter((todo) =>  {
        switch (currentFilter.value) {
          case 'compeleted':
            return todo.compeleted
          case 'doing':
            return !todo.compeleted
          default:
          return todo
        }
      })
    })

    return {
      tabs,
      todoInput,
      todoList,
      todoFilterList,
      currentFilter,
      handleAddTodo: (e) => {
        e.preventDefault()
        if(todoInput.value === '') return

        const newTodo = createTodo(todoInput.value)
        todoList.value = [...todoList.value, newTodo]
        todoInput.value = ''
      },
      setCurrentFilter: (filterName) => {
        currentFilter.value = filterName
      },
      checkedTodo:(id) => {
        const todo = todoList.value.find(todo => todo.id === id)
        todo.compeleted = !todo.compeleted
      },
      clearTodos: () => {
        todoList.value = []
      },
      deleteTodo: (id) => {
        todoList.value = todoList.value.filter(todo => todo.id !== id)
      },
      unCompeletedCount: computed(() => {
        return todoList.value.filter((todo) => !todo.compeleted).length
      })
    }
  }
}
</script>

<style lang="scss">

</style>

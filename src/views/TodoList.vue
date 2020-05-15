<template>
  <div id="todo-list">
    <input id="new-task" type="text" @keyup.enter="addTask" v-model="newTodo" />
    <button id="add-task" @click="addTask">Add task</button>

    <div class="todo-list-container">
      <ul class="todo-list-container-info">
        <li
          class="todo"
          @click="$event.target.classList.toggle('completed')"
          :key="task"
          v-for="(task, index) in tasks"
        >
          {{ task }}
          <button class="delete-todo" @click="removeTask(index)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      let task = document.querySelector("#new-task");
      if (task.value.length > 0 && this.tasks.indexOf(task.value) < 0) {
        this.tasks.push(this.newTodo);
        this.newTodo = "";
      }
    },
    removeTask(value) {
      this.tasks.splice(value, 1);
    },
  },
};
</script>

<style lang="scss">
li {
  list-style-type: none;
}
li.todo {
  cursor: pointer;
  text-align: left;
}
.completed {
  text-decoration: line-through;
}

.delete-todo {
  cursor: pointer;
  margin-left: 10px;
}
</style>

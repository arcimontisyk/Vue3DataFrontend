<script setup lang="ts">
import { ref } from 'vue';

interface TodoListCardProps {
  // Define any props if needed
}

// Reactive state
const tasks = ref<string[]>([]);
const newTask = ref<string>('');

// Functions that mutate state and trigger updates
function addTask () {
  if (newTask.value) {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

function removeTask (index: number): void {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <v-card>
    <v-card-title>Todo List</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ task }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeTask(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-text-field v-model="newTask" label="New Task" @keyup.enter="addTask" />
      <v-btn @click="addTask">Add Task</v-btn>
    </v-card-actions>
  </v-card>
</template>

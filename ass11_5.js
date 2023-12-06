new Vue({
    el: '#app',
    data: {
       tasks: [
         { title: 'Task 1', completed: false },
         { title: 'Task 2', completed: true },
         { title: 'Task 3', completed: false },
       ],
    },
    methods: {
       addTask() {
         this.tasks.push({ title: 'New Task', completed: false });
       },
       toggleCompleted(task) {
         task.completed = !task.completed;
       },
    },
   });
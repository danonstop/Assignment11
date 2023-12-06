const app = new Vue({
    el: '#app',
    data: {
        items: ['Яблоко', 'Банан', 'Апельсин']
    },
    methods: {
        addItem() {
            const newItem = prompt('Введите новый фрукт:');
            if (newItem) {
                this.items.push(newItem);
            }
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
});
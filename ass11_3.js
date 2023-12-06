var app = new Vue({
    el: '#app',
    data: {
        username: '',
        defaultUsername: 'Guest'
    },
    computed: {
        greeting: function() {
            return 'Hello, ' + this.username + '!';
        }
    },
    methods: {
        resetUsername: function() {
            this.username = this.defaultUsername;
        }
    }
});
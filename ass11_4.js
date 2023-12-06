var app = new Vue({
    el: '#app',
    data: {
        username: '',
        email: '',
        password: '',
        errors: {}
    },
    computed: {
        hasErrors: function() {
            return Object.keys(this.errors).length > 0;
        }
    },
    methods: {
        submitForm: function() {
            this.errors = {};

            if (!this.username) {
                this.errors.username = 'Username is required.';
            }

            if (!this.email) {
                this.errors.email = 'Email is required.';
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
                this.errors.email = 'Email is not valid.';
            }

            if (!this.password) {
                this.errors.password = 'Password is required.';
            } else if (this.password.length < 8) {
                this.errors.password = 'Password must be at least 8 characters.';
            }

            if (!this.hasErrors) {
                alert('Form submitted successfully!');
            }
        }
    }
});
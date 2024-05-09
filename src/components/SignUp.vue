// SignUp.vue

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            if (!this.isValidEmail()) {
                alert("Please enter a valid email address.");
                return;
            }

            try {
                const response = await fetch('https://ghassen-worker.ghassenchaari55.workers.dev/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.ok) {
                    // Handle successful signup
                    this.$router.push({ name: 'LoginPage' });
                } else {
                    console.warn("Signup failed:", response.statusText);
                    // Handle signup failure
                }
            } catch (error) {
                console.error("An error occurred during signup:", error);
                // Handle error
            }
        },
        isValidEmail() {
            return this.email.includes('@');
        }
    }
};
</script>

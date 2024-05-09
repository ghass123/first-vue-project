// LoginPage.vue

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            if (!this.email || !this.password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                const response = await fetch('https://ghassen-worker.ghassenchaari55.workers.dev/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.ok) {
                    const userData = await response.json();
                    localStorage.setItem("user-info", JSON.stringify(userData));
                    // Redirect to homepage or handle successful login
                    // Example: this.$router.push({ name: 'HomePage' });
                } else {
                    console.warn("Login failed:", response.statusText);
                    // Handle login failure
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
                // Handle error
            }
        }
    }
};
</script>


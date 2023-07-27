<template>
    <div class="container">
        <div class="row d-flex justify-content-center mb-4">
            <div class="card col-6">
                <p>
                    <strong>Token:</strong>
                    {{ currentUser.accessToken.substring(0, 20) }} ... {{
                        currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
                </p>
                <p>
                    <strong>Id:</strong>
                    {{ currentUser.id }}
                </p>
                <p>
                    <strong>Email:</strong>
                    {{ currentUser.email }}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    <li v-for="(role, index) in currentUser.roles" :key="index">{{ role }}</li>
                </ul>
            </div>
        </div>
        <GamesList/>
        <AddGame/>
    </div>
</template>

<script>
import GamesList from "../components/GamesList.vue"

export default {
    name: 'AdminDashboard',
    components: {
        GamesList
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/signin');
        }
    },
};
</script>
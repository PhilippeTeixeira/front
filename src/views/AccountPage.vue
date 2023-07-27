<template>
    <HeaderComponent />
    <div class="container">
        <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
            <header class="container text-center border border-light rounded">
                <h3>
                    Bienvenue <strong>{{ currentUser.username }}</strong> !
                </h3>
            </header>
        </div>
        <AdminDashboard v-if="showAdminBoard" />
    </div>
    <FooterComponent />
</template>
  
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import AdminDashboard from "../components/AdminDashboard.vue"

export default {
    name: 'AccountPage',
    components: {
        HeaderComponent,
        FooterComponent,
        AdminDashboard
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        showAdminBoard() {
            if (this.currentUser && this.currentUser.roles) {
                return this.currentUser.roles.includes('ROLE_ADMIN');
            }

            return false;
        },
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/signin');
        }
    }
};
</script>
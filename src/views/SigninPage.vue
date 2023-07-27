<template>
    <div class="container py-5" style="height: 100vh;">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <Form class="bg-light text-dark col-10 col-md-4 p-4 rounded" name="form" @submit="handleLogin"
                :validation-schema="schema">

                <h1 class="text-center mb-4">Connectez-vous !</h1>
                <div class="form-group mb-4">
                    <Field name="email" id="emailInput" type="email" class="form-control"
                        placeholder="Entrez votre adresse email" />
                    <ErrorMessage name="email" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <Field name="password" id="passwordInput" type="password" class="form-control"
                        placeholder="Entrez votre mot de passe" />
                    <ErrorMessage name="password" class="text-danger" />
                </div>
                <div class="d-flex justify-content-center mb-4">
                    <button class="btn btn-outline-dark" :disabled="loading" type="submit">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        Se connecter
                    </button>
                </div>
                <div
                    v-if="message"
                    class="alert"
                    :class="successful ? 'alert-success' : 'alert-danger'"
                >{{message}}
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from "yup";

export default {
    beforeCreate: function () {
        document.body.className = "homebody";
    },
    name: "SigninPage",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            email: yup
                .string().required("Une adresse e-mail est requise !"),
            password: yup.string().required("Vous devez entrer un mot de passe !")
        });
        return {
            successful: false,
            message: '',
            schema
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/')
        }
    },
    methods: {
        handleLogin(user) {
            this.loading = true;
            this.$store.dispatch('auth/login', user).then(
                () => {
                this.$router.push('/');
                },
                error => {
                this.loading = false;
                this.message =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                }
            );
        }
    }
}
</script>

<style>

</style>
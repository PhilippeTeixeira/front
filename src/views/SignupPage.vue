<template>
    <div class="container py-5" style="height: 100vh;">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <Form class="bg-light text-dark col-10 col-md-4 p-4 rounded" name="form" @submit="handleRegister"
                :validation-schema="schema">

                <h1 class="text-center mb-4">Incrivez-vous !</h1>
                <div class="form-group mb-4">
                    <Field name="username" id="usernameInput" type="text" class="form-control"
                        placeholder="Entrez votre nom d'utilisateur" />
                    <ErrorMessage name="email" class="text-danger" />
                </div>
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
                        S'inscrire
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
    name: "SignupPage",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string()
                    .required("Veuillez renseigner un nom d'utilisateur !")
                    .min(3, "Votre nom d'utilisateur doit comporter au minimum 3 caractères !")
                    .max(20, "Votre nom d'utilisateur ne doit pas exceder 20 caractères !"),
            email: yup
                .string()
                .required("E-mail requis !")
                .email("L'adresse e-mail renseignée est invalide")
                .max(50, "L'adresse e-mail ne peut pas dépasser 50 caractères !"),
            password: yup
                .string()
                .required("Vous devez entrer un mot de passe !")
                .min(6, "Votre mot de passe doit contenir au minimum 6 caractères !")
                .max(40, "Votre mot de passe ne doit pas excéder 40 caractères !"),
        });
        return {
            submitted: false,
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
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/')
        }
    },
    methods: {
        handleRegister(user) {
            this.message = ''
            this.successful = false
            this.loading = true
            this.$store.dispatch('auth/register', user).then(
                data => {
                    this.message = data.message
                    let username = data.username
                    let email = data.email
                    let password = data.password
                    this.successful = true
                    this.loading = false
                    this.user = { username, email, password }
                    this.handleLogin()
                },
                error => {
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    this.successful = false
                    this.loading = false
                }
            )
        },
        handleLogin() {
            this.loading = true;
            this.$store.dispatch('auth/login', this.user).then(
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

<style></style>
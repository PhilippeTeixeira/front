<template>
    <div class="container">
        <div class="row d-flex justify-content-between mb-2">
            <h2 class="w-50">Liste des jeux</h2>
            <button id="btnAddGame" class="btn btn-outline-light col-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Ajouter un jeu</button>
        </div>

        <div class="accordion accordion-flush" id="addGame">
            <div class="accordion-item bg-transparent">
                <div id="collapseOne" class="accordion-collapse collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#addGame">
                    <div class="accordion-body text-white p-0">
                        <div class="d-flex justify-content-center">
                            <Form id="addgameform" class="bg-light text-dark col-10 col-md-8 p-4 rounded" name="form"
                                @submit="addGame" :validation-schema="schema">
                                <h2 class="text-center mb-4">Ajouter un jeu</h2>
                                <div class="form-group mb-4">
                                    <label for="title">Nom du jeu :</label>
                                    <Field name="title" id="titleInput" type="text" class="form-control"
                                        placeholder="Titre" />
                                    <ErrorMessage name="title" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="description">Description :</label>
                                    <Field name="description" id="descriptionInput" type="text" class="form-control"
                                        placeholder="Description" />
                                    <ErrorMessage name="description" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="plateforms">Plateforme (PC et/ou Xboite) :</label>
                                    <Field name="plateforms" id="plateformsInput" type="text" class="form-control"
                                        placeholder="Supports (Xboite et/ou PC)" />
                                    <ErrorMessage name="plateforms" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="priority">Priorité de développement :</label>
                                    <Field name="priority" id="priorityInput" type="number" class="form-control"
                                        placeholder="Priorité de développement (1-5)" />
                                    <ErrorMessage name="priority" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="gameEngine">Moteur du jeu (Unreal Engine, Unity ou CryEngine) :</label>
                                    <Field name="gameEngine" id="gameEngineInput" type="text" class="form-control"
                                        placeholder="Moteur du jeu (Unity, Unreal ou CryEngine)" />
                                    <ErrorMessage name="gameEngine" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="releaseDate">Date de sortie estimée du jeu :</label>
                                    <Field name="releaseDate" id="releaseDateInput" type="date" class="form-control"
                                        placeholder="Date de sortie du jeu (estimée)" />
                                    <ErrorMessage name="releaseDate" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="budget">Budget alloué au jeu (en €) :</label>
                                    <Field name="budget" id="budgetInput" type="number" class="form-control"
                                        placeholder="Budget (en€)" />
                                    <ErrorMessage name="budget" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="status">Statut du jeu (en production ou en développement) :</label>
                                    <Field name="status" id="statusInput" type="text" class="form-control"
                                        placeholder="Statut (en production ou en cours de développement)" />
                                    <ErrorMessage name="status" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="typeOfGame">Type de jeu (RPG, MMO, Aventure...) :</label>
                                    <Field name="typeOfGame" id="typeOfGameInput" type="text" class="form-control"
                                        placeholder="Type de jeu (RPG, MMO, Aventure...)" />
                                    <ErrorMessage name="typeOfGame" class="text-danger" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="numberOfPlayers">Nombre de joueurs :</label>
                                    <Field name="numberOfPlayers" id="numberOfPlayersInput" type="text" class="form-control"
                                        placeholder="Nombre de joueurs" />
                                    <ErrorMessage name="numberOfPlayers" class="text-danger" />
                                </div>
                                <div class="d-flex justify-content-center mb-4">
                                    <button class="btn btn-outline-dark" :disabled="loading" type="submit"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne">
                                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                        Ajouter
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center">
        <div class="row col-6 position-fixed">
            <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import GameService from '../services/game.service'
import * as yup from "yup";


export default {
    name: 'AddGame',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            title: yup.string().required("Veuillez entrer un titre !"),
            description: yup.string().required("Veuillez remplir ce champ !"),
            plateforms: yup.string().required("Veuillez remplir ce champ !"),
            priority: yup.number().required("Veuillez remplir ce champ !"),
            gameEngine: yup.string().required("Veuillez remplir ce champ !"),
            releaseDate: yup.string().required("Veuillez remplir ce champ !"),
            budget: yup.number().required("Veuillez remplir ce champ !"),
            status: yup.string().required("Veuillez remplir ce champ !"),
            typeOfGame: yup.string().required("Veuillez remplir ce champ !"),
            numberOfPlayers: yup.string().required("Veuillez remplir ce champ !")
        })
        return {
            submitted: false,
            successful: false,
            message: '',
            schema
        }
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
    methods: {

        addGame(game) {
            this.message = ''
            this.successful = false
            this.loading = true
            GameService.addGame(game).then(
                data => {
                    this.submitted = true
                    this.successful = true
                    this.loading = false
                    this.message = data.message
                    this.title = data.title
                    this.description = data.description
                    this.studioName = 'Gamesoft'
                    this.plateforms = data.plateforms
                    this.priority = data.priority
                    this.gameEngine = data.gameEngine
                    this.budget = data.budget
                    this.status = data.status
                    this.typeOfGame = data.typeOfGame
                    this.numberOfPlayers = data.numberOfPlayers
                    const form = document.getElementById("addgameform")
                    HTMLFormElement.prototype.reset.call(form)
                    this.$parent.refreshGamesList()
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                },
                error => {
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                    this.successful = false
                    this.loading = false
                    const form = document.getElementById("addgameform")
                    HTMLFormElement.prototype.reset.call(form)
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                }

            )
        }
    }
};
</script>
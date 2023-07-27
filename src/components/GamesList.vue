<template>
    <div class="container border-top">
        <div class="row mt-2">
            <AddGame/>
        </div>
        <table class="table table-striped">
            <thead class="table-dark border-light">
                <tr>
                    <th>Nom du jeu</th>
                    <th>Date de production</th>
                    <th>Score d'intérêt</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <GamesListElement v-for="element in elements" :key="element.name" :title="element.title"
                    :releaseDate="element.releaseDate" :score="element.score" />

            </tbody>
        </table>
    </div>
</template>

<script>
import GamesListElement from "../components/GamesListElement.vue"
import GameService from '../services/game.service'
import AddGame from './AddGame.vue'

export default {
    name: "GamesList",
    props: ["title", "releaseDate", "score"],
    components: { 
        GamesListElement,
        AddGame
    },
    data() {
        return {
            elements: []
        };
    },
    methods: {
        getGamesList() {
            GameService.getGamesList().then(response => {
                for (let element of response.data.games) {
                    this.elements.push({ title: element.title, releaseDate: element.releaseDate, score: element.score })
                    //console.log(this.elements)
                }
            })
                .catch(err => {
                    console.log(err)
                })
        },
        refreshGamesList() {
            this.elements = []
            this.getGamesList()
        }
    },
    mounted() {
        this.getGamesList()

    }
}
</script>
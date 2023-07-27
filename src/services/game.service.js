import axios from 'axios'

const API_URL = 'https://mighty-falls-43184-1878087393ca.herokuapp.com/api/game/'

class GameService {
    addGame(game) {
        return axios
        .post(API_URL + 'addgame', {
            title: game.title,
            description: game.description,
            studioName: game.studioName,
            pictures: game.title + ' 001',
            plateforms: game.plateforms,
            priority: game.priority,
            score: game.score,
            gameEngine: game.gameEngine,
            releaseDate: game.releaseDate,
            budget: game.budget,
            status: game.status,
            typeOfGame: game.typeOfGame,
            numberOfPlayers: game.numberOfPlayers
        }).then(response => {
            return response.data
        })
    }
    getGamesList() {
        return axios
        .get(API_URL + "gameslist").then(response => {
            return response
        })
    }
}

export default new GameService()
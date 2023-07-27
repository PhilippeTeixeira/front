export default class Game {
    constructor(title, description, studioName, pictures, plateforms, priority, score, gameEngine, creationDate, lastUpdate, releaseDate, budget, status, typeOfGame, numberOfPlayers) {
        this.title = title
        this.description = description
        this.studioName = studioName
        this.pictures = pictures
        this.plateforms = plateforms
        this.priority = priority
        this.score = score
        this.gameEngine = gameEngine
        this.creationDate = creationDate 
        this.lastUpdate = lastUpdate
        this.releaseDate = releaseDate
        this.budget = budget
        this.status = status
        this.typeOfGame = typeOfGame
        this.numberOfPlayers = numberOfPlayers
    }
}
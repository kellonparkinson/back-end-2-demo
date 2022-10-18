const movies = require('./db.json')

module.exports = {
    getMovies: (req, res) => {
        res.send(movies)
    },
    deleteMovie: (req, res) => {
        const deleteId = req.params.id
        let index = movies.findIndex((e) => e.id === +deleteId)
        movies.splice(index, 1)
        res.send(movies)
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body

        //this code finds the next, non-used id in the database
        let greatestId = -1
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id > greatestId) {
                greatestId = movies[i].id
            }
        }
        
        let nextId = greatestId + 1
        let newMovie = {
            id: nextId,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.send(movies)
    }
}
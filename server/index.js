const express = require('express')
const cors = require('cors')

const app = express()

//middleware//
app.use(cors())
app.use(express.json())
//----------//


//destructure getMovies function from controller modules//
const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller')
//------------------------------------------------------//


//endpoints//
app.get("/api/movies", getMovies)

app.delete("/api/movies/:id", deleteMovie)

app.post("/api/movies", createMovie)

app.put("/api/movies/:id", updateMovie)
//---------//


const PORT = 4004
app.listen(PORT, () => console.log(`Running on ${PORT}`))
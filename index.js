import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import ApiController from "./controllers.js";
const app = express()
const PORT = 30001

//app.use(cors())


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send()
})

app.get('/categories', ApiController.getCategories)
app.get('/characteristics', ApiController.getCharacteristics)
app.get('/offers', ApiController.getOffers)
app.post('/offer', ApiController.postOffer)
app.get('/orders', ApiController.getOrders)


app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}/`)
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ApiController = require('./controllers.js')

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
app.post('/offers', ApiController.postOffers)
app.post('/offers/stocks', ApiController.postOffersStocks)
app.post('/offers/prices', ApiController.postOffersPrices)
app.get('/orders', ApiController.getOrders)
app.post('/orders/status', ApiController.postOrdersStatus)
app.post('/orders/attach-awb', ApiController.postOrdersAttachAWB)
app.post('/orders/attach-invoice', ApiController.postOrdersAttachInvoice)
app.post('/orders/attach-reverse-invoice', ApiController.postOrdersAttachInvoice)


app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}/`)
})
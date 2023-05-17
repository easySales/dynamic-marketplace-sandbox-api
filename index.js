const express = require('express')
const bodyParser = require('body-parser')
const ApiController = require('./controllers.js')

const app = express()
const PORT = 30001

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('We Don\'t Do That Here')
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
app.post('/orders/attach-reverse-invoice', ApiController.postOrdersAttachReverseInvoice)

app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}/`)
})
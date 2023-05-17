const {categories, characteristics, offers, orders} = require('./data')

class ApiController {
    static async getCategories(req, res, next) {
        const {page, perPage} = req.query

        res.status(200).json({
            errors: [],
            categories: categories,
            pagination: {
                totalPages: 1,
                currentPage: 1
            }
        });
    }

    static async getCharacteristics(req, res, next) {
        const {page, perPage, categoryId} = req.query

        res.status(200).json({
            errors: [],
            characteristics: characteristics,
            pagination: {
                totalPages: 1,
                currentPage: 1
            }
        });
    }

    static async getOffers(req, res, next) {
        const {page, perPage} = req.query

        res.status(200).json({
            errors: [],
            offers: offers,
            pagination: {
                totalPages: 1,
                currentPage: 1
            }
        });
    }

    static async getOrders(req, res, next) {
        const {page, perPage, lastUpdate, orderId} = req.query

        res.status(200).json({
            errors: [],
            orders: orders,
            pagination: {
                totalPages: 1,
                currentPage: 1
            }
        });
    }

    static async postOffers(req, res, next) {
        res.status(200).json({
            errors: [],
            offers: offers,
        });

        /*res.status(422).json({
            errors: [
                {
                    sku: 'offer-example-sku',
                    messages: [
                        'Unable to upate offer, invalid name',
                    ]
                }
            ],
            offers: [],
        });*/
    }

    static async postOffersStocks(req, res, next) {
        res.status(200).json({
            errors: [],
            offers: req.body,
        });

        /*res.status(422).json({
            errors: [
                {
                    "offerId": "offer-example-id-2",
                    "messages": [
                        "Unable to create offer, invalid name"
                    ]
                }
            ],
            offers: [],
        });*/
    }

    static async postOffersPrices(req, res, next) {
        /*res.status(200).json({
            errors: [],
            offers: [offers],
        });*/

        res.status(422).json({
            errors: [
                {
                    offerId: '1-2-3',
                    messages: [
                        'Unable to upate offer price'
                    ]
                }
            ],
            offers: [
                {
                    offerId: '1-2',
                    salePrice: 10,
                    fullPrice: 20
                }
            ]
        });
    }

    static async postOrdersStatus(req, res, next) {
        res.status(200).json({
            errors: [],
            orders: [
                {
                    orderId: "123456",
                    status: 1,
                    statusText: "I cand do what i want!!!!11!!"
                }
            ]
        });
    }

    static async postOrdersAttachAWB(req, res, next) {
        res.status(200).json({
            errors: [],
            orders: [
                {
                    orderId: 1,
                    url: "http://example.com/file.pdf",
                    awbNumber: "12345678"
                }
            ]
        });
    }

    static async postOrdersAttachInvoice(req, res, next) {
        res.status(200).json({
            errors: [],
            orders: [
                {
                    orderId: 1,
                    url: "http://example.com/file.pdf",
                    invoiceNumber: "12345678"
                }
            ]
        });
    }

    static async postOrdersAttachReverseInvoice(req, res, next) {
        res.status(200).json({
            errors: [],
            orders: [
                {
                    orderId: 1,
                    url: "http://example.com/file.pdf",
                    invoiceNumber: "12345678"
                }
            ]
        });
    }
}

module.exports = ApiController
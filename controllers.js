export default class ApiController {
    static async getCategories(req, res, next) {
        const {page, perPage} = req.query

        const categories = [
            {
                marketplaceId: 1,
                name: 'Automotive'
            },
            {
                marketplaceId: 2,
                name: 'Phones'
            },
            {
                marketplaceId: 3,
                name: 'Software'
            },
            {
                marketplaceId: 4,
                name: 'Others'
            }
        ]

        res.json({
            errors: [],
            categories: categories,
            pagination: {
                totalPages: 10,
                currentPage: parseInt(page)
            }
        }).status(200);
    }

    static async getCharacteristics(req, res, next) {
        const {page, perPage, categoryId} = req.query

        const characteristics = [
            {
                marketplaceId: 1,
                name: 'Color',
                isMandatory: true,
                isRestrictive: true,
                isDeleted: false,
                values: [
                    {
                        value: 'red',
                        label: 'Red'
                    },
                    {
                        value: 'green',
                        label: 'Green'
                    }
                ]
            },
            {
                marketplaceId: 2,
                name: 'Type',
                isMandatory: true,
                isRestrictive: true,
                isDeleted: false,
                values: [
                    {
                        value: 'big',
                        label: 'Big'
                    },
                    {
                        value: 'small',
                        label: 'Small'
                    }
                ]
            },
            {
                marketplaceId: 3,
                name: 'ConditionNote',
                isMandatory: false,
                isRestrictive: false,
                isDeleted: false,
                values: []
            },
            {
                marketplaceId: 4,
                name: 'ConditionNoteTest',
                isMandatory: false,
                isRestrictive: false,
                isDeleted: true,
                values: []
            }
        ];

        res.json({
            errors: [],
            characteristics: characteristics,
            pagination: {
                totalPages: 10,
                currentPage: parseInt(page)
            }
        }).status(200);
    }

    static async getOffers(req, res, next) {
        let offers = [
            {offer_id: 1}
        ]

        res.json({
            errors: [],
            offers: offers,
            pagination: {
                totalPages: 10,
                currentPage: parseInt(page)
            }
        }).status(200);
    }

    static async getOrders(req, res, next) {
        let orders = [
            {orderId: 1}
        ]

        res.json({
            errors: [],
            orders: orders,
            pagination: {
                totalPages: 10,
                currentPage: parseInt(page)
            }
        }).status(200);
    }

    static async postOffers(req, res, next) {
        const {page, perPage, categoryId} = req.query

        const offers = {
            ...req.body,
            offerId: '1-2-3'
        }

        console.log(JSON.stringify(offer))

        res.json({
            errors: [],
            offers: offers,
        }).status(200);
    }

    static async postOffersStocks(req, res, next) {
        const {page, perPage, categoryId} = req.query

        const offers = {
            ...req.body,
            offerId: '1-2-3'
        }

        console.log(JSON.stringify(offer))

        res.json({
            errors: [],
            offers: offers,
        }).status(200);
    }

    static async postOffersPrices(req, res, next) {
        const {page, perPage, categoryId} = req.query

        const offers = {
            ...req.body,
            offerId: '1-2-3'
        }

        console.log(JSON.stringify(offer))

        res.json({
            errors: [],
            offers: offers,
        }).status(200);
    }
}
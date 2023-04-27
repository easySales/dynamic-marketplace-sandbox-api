export default class ApiController {
    static getCategories(req, res, next) {
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
            data: categories,
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
                values: []
            }
        ];

        res.json({
            errors: [],
            data: characteristics,
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

        res.json(offers);
    }

    static async getOrders(req, res, next) {
        let orders = [
            {order_id: 1}
        ]

        res.json(orders, 200);
    }

    static async postOffer(req, res, next){
        const {page, perPage, categoryId} = req.query

        const offer = {
            ...req.body,
            offerId: '1-2-3'
        }

        console.log(JSON.stringify(offer))

        res.json({
            errors: [],
            data: offer,
        }).status(200);
    }

}
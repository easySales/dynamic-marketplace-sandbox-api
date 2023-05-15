class ApiController {
    static async getCategories(req, res, next) {
        const {page, perPage} = req.query

        const categories = [
            {
                categoryId: 1,
                name: 'Automotive'
            },
            {
                categoryId: 2,
                name: 'Phones'
            },
            {
                categoryId: 3,
                name: 'Software'
            },
            {
                categoryId: 4,
                name: 'Others'
            }
        ]

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

        const characteristics = [
            {
                characteristicId: 1,
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
                characteristicId: 2,
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
                characteristicId: 3,
                name: 'ConditionNote',
                isMandatory: false,
                isRestrictive: false,
                isDeleted: false,
                values: []
            },
            {
                characteristicId: 4,
                name: 'ConditionNoteTest',
                isMandatory: false,
                isRestrictive: false,
                isDeleted: true,
                values: []
            }
        ];

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
        let offers = [
            {
                name: 'Offer example name',
                description: '<p>Offer example description</p>',
                categoryId: '4',
                sku: 'offer-example-sku',
                ean: '2016723983597',
                url: 'https://example.com/offer-example-id',
                images: [
                    'https://easysales1.fra1.digitaloceanspaces.com/uploads/1/1672398315-wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'
                ],
                url: 'https://example.com/offer-example-id',
                brand: 'Lee',
                status: 1,
                stock: 100,
                salePrice: 10,
                fullPrice: 20,
                characteristics: [{id: '1', value: 'red'}, {id: '2', value: 'SecondType'}],
                offerId: 'offer-example-id'
            }
        ]

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
        let orders = [
            {
                "orderId": "1",
                "orderCode": "display-order-code",
                "status": 1,
                "paymentMethod": "1",
                "orderDate": "2023-05-08",
                "customer": {
                    "isCompany": true,
                    "companyIdentifier": "12345",
                    "companyName": "Acme",
                    "registrationNumber": "12344",
                    "phone": "0726704393",
                    "name": "John Doe",
                    "identificationNumber": "12345",
                    "email": "john@doe.com",
                    "bank": "12345",
                    "iban": "12345",
                    "fax": "12345"
                },
                "billingAddress": {
                    "name": "John Doe",
                    "phone": "0726704393",
                    "country": "RO",
                    "region": "B",
                    "city": "Bucuresti",
                    "address": "str. Unirii 1",
                    "postalCode": "10001"
                },
                "shippingAddress": {
                    "name": "John Doe",
                    "phone": "7412332145",
                    "country": "RO",
                    "region": "B",
                    "city": "Bucuresti",
                    "address": "str. Unirii 1",
                    "postalCode": "10001"
                },
                "vouchers": [
                    {
                        "name": "Global discount",
                        "price": 119,
                        "priceWithTax": 100,
                        "tax": 19
                    }
                ],
                "products": [
                    {
                        "name": "Offer example ame",
                        "price": 100,
                        "quantity": 3,
                        "tax": 19,
                        "offerId": "offer-example-id"
                    }
                ]
            }
        ]

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
        const {page, perPage, categoryId} = req.query

        const offers = [
            {
                name: 'Offer example name',
                description: '<p>Offer example description</p>',
                categoryId: '4',
                sku: 'offer-example-sku',
                ean: '2016723983597',
                images: [
                    'https://easysales1.fra1.digitaloceanspaces.com/uploads/1/1672398315-wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'
                ],
                url: "https://example.com/offer-example-id",
                brand: 'Lee',
                status: 0,
                stock: 100,
                salePrice: 10,
                fullPrice: 20,
                characteristics: [{id: '1', value: 'red'}, {id: '2', value: 'SecondType'}],
                offerId: 'offer-example-id'
            }
        ]

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
        const offers = {
            ...req.body,
            offerId: '1-2-3'
        }

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
            offers: [],
        });
    }

    static async postOrdersStatus(req, res, next) {
        let orders = [
            {orderId: 1}
        ]

        res.status(200).json({
            errors: [],
            orders: orders
        });
    }

    static async postOrdersAttachAWB(req, res, next) {
        let orders = [
            {
                orderId: 1,
                messages: [
                    'Success.'
                ]
            }
        ]

        res.status(200).json({
            errors: [],
            orders: orders
        });
    }

    static async postOrdersAttachInvoice(req, res, next) {
        let orders = [
            {
                orderId: 1,
                messages: [
                    'Success.'
                ]
            }
        ]

        res.status(200).json({
            errors: [],
            orders: orders
        });
    }
}

module.exports = ApiController
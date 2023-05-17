const orders = [
    {
        "orderId": "123456",
        "orderCode": "display-order-code-123456",
        "status": 1,
        "statusText": "Status description",
        "paymentMethod": "1",
        "orderDate": "2023-05-08",
        "shippingTax": 25,
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
                "tax": 0.19
            }
        ],
        "products": [
            {
                "name": "Offer example ame",
                "price": 100,
                "quantity": 3,
                "tax": 0.19,
                "offerId": "offer-example-id"
            }
        ]
    }
]

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

const offers = [
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

module.exports = {
    categories: categories,
    characteristics: characteristics,
    offers: offers,
    orders: orders
}
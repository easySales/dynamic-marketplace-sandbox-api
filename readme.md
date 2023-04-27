# Project usage

`npm install`<br>
`npm run watch`

# Dynamic Marketplace Endpoints:

### GET CATEGORIES <br>

<details>
  <summary>Example url</summary>

`https://acme.com/categories?page=1&perPage=100`
</details>

<details>
  <summary>Request Params</summary>

[Query] page - number of the page to fetch<br>
[Query] perPage - number of items per page
</details>

<details>
  <summary>Request Headers</summary>

`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USERNAME:PASSWORD`<br>
</details>

<details>
  <summary>Response Headers</summary>

`Content-Type: application/json`<br>
</details>

<details>
  <summary>Response Body</summary>

```json
{
  "errors": [],
  "categories": [
    {
      "marketplaceId": "111",
      "name": "Automotive"
    }
  ],
  "pagination": {
    "totalPages": 10,
    "currentPage": 100
  }
}
```

</details>

<details>
  <summary>Notes</summary>

errors - should always return and array of errors (if present)<br>
categories - should always return and array of categories<br>
pagination - should always return totalPages and currentPage properties<br>
</details>

### GET CHARACTERISTICS <br>

<details>
  <summary>Example url</summary>

`https://acme.com/characteristics?categoryId=10`
</details>

<details>
  <summary>Request Params</summary>

[Query] categoryId - category id that characteristics attached<br>
[Query] page - number of the page to fetch<br>
[Query] perPage - number of items per page
</details>

<details>
  <summary>Request Headers</summary>

`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USERNAME:PASSWORD`<br>
</details>

<details>
  <summary>Response Headers</summary>

`Content-Type: application/json`<br>
</details>

<details>
  <summary>Response Body</summary>

```json
{
  "errors": [],
  "characteristics": [
    {
      "marketplaceId": "111",
      "name": "Color",
      "isMandatory": false,
      "isRestrictive": true,
      "values": [
        {
          "value": "red",
          "label": "Red"
        }
      ]
    }
  ],
  "pagination": {
    "totalPages": 10,
    "currentPage": 100
  }
}
```

</details>

<details>
  <summary>Notes</summary>

errors - should always return and array of errors (if present)<br>
characteristics - should always return and array of characteristics<br>
pagination - should always return totalPages and currentPage properties<br>
</details>

### GET OFFERS <br>

<details>
  <summary>Example url</summary>

`https://acme.com/offers?page=1&perPage=100`
</details>

<details>
  <summary>Request Params</summary>

[Query] page - number of the page to fetch<br>
[Query] perPage - number of items per page
</details>

<details>
  <summary>Request Headers</summary>

`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USER_USERNAME:USER_PASSWORD`<br>
</details>

<details>
  <summary>Response Headers</summary>

`Content-Type: application/json`<br>
</details>

<details>
  <summary>Response Body</summary>

```json
{
  "errors": [],
  "offers": [
    {
      "name": "Offer name",
      "description": "<p>Offer description</p>",
      "categoryId": "3",
      "sku": "offer-sku-1",
      "ean": "2016723983597",
      "images": [
        "https://example.jpg"
      ],
      "brand": "Lee",
      "status": 1,
      "stock": 2,
      "salePrice": 2318.12,
      "fullPrice": 2318.12,
      "characteristics": [
        {
          "id": "1",
          "value": "red"
        },
        {
          "id": "2",
          "value": "SA"
        },
        {
          "id": "3",
          "value": "sasasa"
        }
      ],
      "offerId": "1-2-3"
    }
  ],
  "pagination": {
    "totalPages": 10,
    "currentPage": 100
  }
}
```

</details>

<details>
  <summary>Notes</summary>

errors - should always return and array of errors (if present)<br>
offers - should always return and array of offers<br>
pagination - should always return totalPages and currentPage properties<br>
</details>

### GET ORDERS <br>

<details>
  <summary>Example url</summary>

`https://acme.com/orders?page=1&perPage=100`
</details>

<details>
  <summary>Request Params</summary>

[Query] lastUpdate - last updated of order used as filter<br>
[Query] page - number of the page to fetch<br>
[Query] perPage - number of items per page
</details>

<details>
  <summary>Request Headers</summary>

`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USER_USERNAME:USER_PASSWORD`<br>
</details>

<details>
  <summary>Response Headers</summary>

`Content-Type: application/json`<br>
</details>

<details>
  <summary>Response Body</summary>

```json
{
  "errors": [],
  "orders": [
    {
      "orderId": "1-2-3",
      "status": 1,
      "payment_method": "1",
      "customer": {
        "is_company": true,
        "company_identifier": "12345",
        "company_name": "Acme",
        "registration_number": "12344",
        "phone": "7412332145",
        "name": "John Doe",
        "identification_number": "12345",
        "email": "john@doe.com",
        "bank": "12345",
        "iban": "12345",
        "fax": "12345"
      },
      "billing_address": {
        "name": "John Doe",
        "phone": "7412332145",
        "country": "RO",
        "region": "Ilfov",
        "city": "Bucuresti",
        "street": "str. Unirii 1",
        "postal_code": "10001"
      },
      "shipping_address": {
        "name": "John Doe",
        "phone": "7412332145",
        "country": "RO",
        "region": "Ilfov",
        "city": "Bucuresti",
        "street": "str. Unirii 1",
        "postal_code": "10001"
      },
      "vouchers": [
        {
          "name": "Global discount",
          "price_with_tax": 119,
          "price_without_tax": 100,
          "tax": 19
        }
      ],
      "products": [
        {
          "name": "Product Name",
          "price": 100,
          "quantity": 3,
          "tax": 19,
          "offer_id": "1-2-3"
        }
      ]
    }
  ],
  "pagination": {
    "totalPages": 10,
    "currentPage": 100
  }
}
```

</details>

<details>
  <summary>Notes</summary>

errors - should always return and array of errors (if present)<br>
orders - should always return and array of offers<br>
pagination - should always return totalPages and currentPage properties<br>
</details>


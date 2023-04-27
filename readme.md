# Endpoints:

## getCategories <br>

**Example url:** <br>
https://acme.com/categories?page=1&perPage=100<br>

**Request Params:** <br>
[Query] page - number of the page to fetch<br>
[Query] perPage - number of items per page

**Request Headers:** <br>
`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USERNAME:PASSWORD`<br>

**Response Headers:** <br>
`Content-Type: application/json`<br>

**Response Body:** <br>

```json
{
  "errors": [],
  "data": [
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

<br>
**Notes:** <br>
errors - should always return and array of errors (if present)<br>
data - should always return and array of categories<br>
pagination - should always return totalPages and currentPage properties<br>

## updateOrCreateOffer <br>

**Example url:** <br>
https://acme.com/offer<br>

**Request Headers:** <br>
`Content-Type: application/json`<br>
`Accept: application/json`<br>
`Authorization: Basic USER_USERNAME:USER_PASSWORD`<br>

**Request Body:** <br>

<details>
  <summary>View</summary>

```json
{
  "name": "Offer name",
  "description": "<p>yjfykgvbku</p>",
  "categoryId": "3",
  "sku": "sku_produs_2",
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
  ]
}
```
</details>



**Response Headers:** <br>
`Content-Type: application/json`<br>

**Response Body:** <br>

<details>
  <summary>View</summary>

```json
{
  "name": "Offer name",
  "description": "<p>yjfykgvbku</p>",
  "categoryId": "3",
  "sku": "sku_produs_2",
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
```
</details>


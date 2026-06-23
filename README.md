# Shopify ZIP Code Pricing Demo

A simple Shopify ZIP Code–Based Product Pricing Demo built with Shopify and Node.js (Express). Customers can enter a destination ZIP code and receive dynamic pricing estimates directly from the product page.

---

## Features

- ZIP code input field near the product price
- Dynamic pricing using a backend API
- Hardcoded pricing rules for demo purposes
- Invalid ZIP code handling
- Real-time price updates
- Shopify storefront integration

---

## Tech Stack

- Shopify
- Node.js
- Express.js
- JavaScript

---

## API Endpoint

### POST `/get-price`

### Request

```json
{
  "zipCode": "75028"
}
```

### Response

```json
{
  "success": true,
  "price": 1499
}
```

---

## Test ZIP Codes

| ZIP Code | Price |
|----------|--------|
| 75028 | $1499 |
| 10001 | $1699 |
| 90210 | $1799 |

Any other ZIP code returns:

```text
No pricing available for this ZIP code
```

---

## Project Structure

```text
shopify-zip-pricing-demo
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── screenshots
│   ├── home-page.PNG
│   ├── product-page.PNG
│   ├── valid-zip-price.PNG
│   ├── invalid-zip-price.PNG
│   └── backend-server.PNG
│
└── README.md
```

---

## Screenshots

### Home Page

![Home Page](screenshots/home-page.PNG)

### Product Page

![Product Page](screenshots/product-page.PNG)

### Valid ZIP Code Result

![Valid ZIP](screenshots/valid-zip-price.PNG)

### Invalid ZIP Code Result

![Invalid ZIP](screenshots/invalid-zip-price.PNG)

### Backend Server

![Backend Server](screenshots/backend-server.PNG)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/NafeesAhmedBhatti/shopify-zip-pricing-demo.git
```

### Install Dependencies

```bash
cd backend
npm install
```

### Run Server

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

---

## Author

### Nafees Ahmed Bhatti

GitHub: https://github.com/NafeesAhmedBhatti

# Shopify ZIP Pricing Demo

A Shopify demo project that provides dynamic product pricing based on the customer's ZIP code.

## 🚀 Features

- Dynamic ZIP code-based pricing
- Shopify product page integration
- Node.js + Express backend
- Shopify App Proxy architecture
- Valid and invalid ZIP code handling
- Render deployment
- GitHub version control

---

## 🏗 Architecture

```text
Product Page
      ↓
Shopify App Proxy
      ↓
Node.js Backend API
      ↓
ZIP-based Pricing Response
```

---

## 🛠 Tech Stack

### Frontend
- Shopify Theme (Liquid)
- HTML
- JavaScript

### Backend
- Node.js
- Express.js
- CORS

### Deployment
- Render

### Version Control
- GitHub

---

## 📌 ZIP Pricing Rules

| ZIP Code | Price |
|-----------|--------|
| 75028 | $1499 |
| 10001 | $1699 |
| 90210 | $1799 |

Invalid ZIP codes return:

```text
No pricing available for this ZIP code
```

---

## 🔌 API Endpoint

### POST /get-price

### Request

```json
{
  "zipCode": "75028"
}
```

### Success Response

```json
{
  "success": true,
  "price": 1499
}
```

### Invalid ZIP Response

```json
{
  "success": false,
  "message": "No pricing available for this ZIP code"
}
```

---

## 🔒 App Proxy Flow

Instead of exposing the backend directly, requests are routed through Shopify App Proxy.

```text
Product Page
↓
/apps/zip-pricing/get-price
↓
Shopify App Proxy
↓
Render Backend API
↓
Pricing Response
```

This architecture provides a more production-oriented and secure implementation.

---

## 🌐 Deployment

### Backend URL

```text
https://shopify-zip-pricing-demo-4apv.onrender.com
```

### Store URL

```text
https://zip-pricing-demo-tqoemsuw.myshopify.com
```

---

## 📷 Screenshots

### Home Page

![Home Page](screenshots/home-page.PNG)

### Product Page

![Product Page](screenshots/product-page.PNG)

### Valid ZIP Price

![Valid ZIP](screenshots/valid-zip-price.PNG)

### Invalid ZIP Price

![Invalid ZIP](screenshots/invalid-zip-price.PNG)

### Backend Server

![Backend Server](screenshots/backend-server.PNG)

---

## 🎥 Demo Video

Loom Recording:

https://www.loom.com/share/7f722735233344dc8eaf1907019ccd23

---

## 👨‍💻 Author

**Nafees Ahmed Bhatti**

GitHub:  
https://github.com/NafeesAhmedBhatti

---

## ✅ Reviewer Feedback Improvement

### Initial Architecture

```text
Product Page
↓
Direct Backend API
```

### Updated Architecture

```text
Product Page
↓
Shopify App Proxy
↓
Backend Pricing API
```

The initial implementation exposed the backend API directly. Based on reviewer feedback, the architecture was improved by introducing Shopify App Proxy between the product page and backend API.

This approach reduces direct API exposure and provides a cleaner and more production-oriented architecture.

---

## 📂 Project Structure

```text
Shopify_pricing/
│
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .gitignore
│
├── screenshots/
│   ├── home-page.PNG
│   ├── product-page.PNG
│   ├── valid-zip-price.PNG
│   ├── invalid-zip-price.PNG
│   └── backend-server.PNG
│
└── README.md
```

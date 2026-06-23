const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Shopify ZIP Pricing API is running");
});


app.post("/get-price", (req, res) => {
  const { zipCode } = req.body;

  const prices = {
    "75028": 1499,
    "10001": 1699,
    "90210": 1799
  };

  if (prices[zipCode]) {
    return res.json({
      success: true,
      price: prices[zipCode]
    });
  }

  return res.json({
    success: false,
    message: "No pricing available for this ZIP code"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
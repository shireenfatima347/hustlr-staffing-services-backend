const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

// GET /products
router.get("/", (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = products.filter(p => p.category === category);
    return res.json(filtered);
  }
  res.json(products);
});

// GET /products/:id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// POST /products (optional)
router.post("/", express.json(), (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || typeof price !== "number") {
    return res.status(400).json({ error: "Invalid product data" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;

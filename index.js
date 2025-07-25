const express = require("express");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/products");

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Backend API. Use /products to get data.");
});

app.use("/products", productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

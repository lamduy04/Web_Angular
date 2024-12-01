const expores = require("express");
const mongoose = require("mongoose");
const app = expores();
const port = 3000;
const cors =require("cors");
const categoryRoutes =require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes =require("./routes/product");

app.use(cors());

app.use(expores.json());
app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/category",categoryRoutes);
app.use("/brand",brandRoutes);
app.use("/product",productRoutes);


async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "e-comm-store-db",
    });
    console.log("Đã kết nối thành công với MongoDB");
}
connectDb().catch((err) => {
    console.error(err);
});
app.listen(port, () => {
    console.log("Server running on port", port);
});

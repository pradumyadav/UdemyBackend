const express = require("express");

const app = express();
const cors = require("cors");
const routerforAll = require("./routes/router");
const connection = require("./Config/config");
const userRoutes = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRouter");

const stripe = require("stripe")(
  "sk_test_51OF9HNSGSBjFGMDatfWIxrvEPfOtKJ8TOudE68qT3g5E8ziq4CS9yiGU4uEhz5VyAsaYTZr8H2a2TYUrHjJzZoZi00CnHzpcJA"
);

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routerforAll);
app.use("/user", userRoutes);
app.use("/cart", cartRouter);

//checkout Api...
app.post("/out/create-checkout-session", async (req, res) => {
  const { AllData, Total } = req.body;
  console.log(AllData, Total);

  

  const lineItems = AllData.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.item.title,
      },
      unit_amount: product.item.price * 100,
    },
    quantity: product.item.quantity || 1,
  }));
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  });
  res.json({ id: session.id });
});

app.listen(4005, async () => {
  try {
    await connection();
    console.log("We are on 4005");
  } catch (err) {
    console.log(err);
  }
});

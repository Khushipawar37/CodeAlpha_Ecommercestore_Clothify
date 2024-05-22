const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001; 

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/clothify', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  const orderSchema = new mongoose.Schema({
    items: {
      type: Array,
      validate: {
        validator: (value) => {
          return value.every((item) => {
            return item.productId && item.name && item.quantity && item.price;
          });
        },
        message: 'Each item in the order must have a productId, name, quantity, and price',
      },
    },
    totalAmount: {
      type: integer,
      required: true
    }
  });

const Order = mongoose.model('Order', orderSchema);

app.post('/order', cors(), async (req, res) => {
    const order = new Order(req.body);
    order.save()
      .then(() => {
        res.status(201).send(order);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

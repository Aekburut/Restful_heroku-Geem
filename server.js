var express = require('express');
var app = express();
var db = require('./database');
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());//สำคํญต้องใช้
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page
app.get('/', function (req, res) {
    res.send('REST is running');
});


var output = {
    status: 'succes',
    message: 'rest api is working'
}
app.get('/api/json', function (req, res) {
    res.status(200).json(output);

});

//Products
app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductsByID);
app.post('/api/products', db.InsertProducts);
app.put('/api/products/:id', db.UpdateProducts);
app.delete('/api/products/:id', db.DeleteProducts);

//users
app.get('/api/users', db.getUsers);
app.get('/api/users/:id', db.getUsersByID);
app.post('/api/users', db.InsertUsers);
app.put('/api/users/:id', db.UpdateUsers);
app.delete('/api/users/:id', db.DeleteUsers);

//Purchase_item
app.get('/api/purchase_items', db.getPurchase_items);
app.get('/api/purchase_items/:id', db.getPurchase_itemsByID);
app.post('/api/purchase_items', db.InsertPurchase_items);
app.put('/api/purchase_items/:id', db.UpdatePurchase_items);
app.delete('/api/purchase_items/:id', db.DeletePurchase_items);
//Purchase
app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase);
app.put('/api/purchase/:id', db.updatePurchase);
app.delete('/api/purchase/:id', db.DeletePurchase);


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});
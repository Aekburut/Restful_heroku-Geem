
const pgp = require('pg-promise')();
var db = pgp('postgres://otgkmeypkqzstt:35a8d460ec0f944fc76af4b2f5418baa65694cc8d07a732f1180f85355781521@ec2-54-156-0-178.compute-1.amazonaws.com:5432/d62ksn3bjp2srd?ssl=true');

//Product
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getProductsByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
       .catch(function (error) {
            console.log('ERROR:', error)
        

        })
}

function InsertProducts(req, res) {
    db.none('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function UpdateProducts(req, res) {
    db.none('update products set title=${title},price=${price},created_at=${created_at} where product_id=' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeleteProducts(req, res) {
    db.none('delete FROM products where product_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//Users
function getUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getUsersByID(req, res) {
    db.any('select * from users where users_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
function InsertUsers(req, res) {
    db.any('insert into users(users_id,email,password,details,created_at)' +
        'values(${users_id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function DeleteUsers(req, res) {
    db.any('delete from users where users_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
  
}
function UpdateUsers(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where users_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


//Purchase_item
function getPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function InsertPurchase_items(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id,price,quantity)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function UpdatePurchase_items(req, res) {
    db.any('update purchase_items set purchase_id=${purchase_id},product_id=${product_id},price=${price},quantity=${quantity} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase_item id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeletePurchase_items(req, res) {
    db.any('delete from purchase_items where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        
}

//Purchases
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchaseByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function insertPurchase(req, res) {
    db.any('insert into purchases(purchase_id,created_at,name,address,state,zipcode,users_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${users_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function updatePurchase(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},users_id=${users_id} where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function DeletePurchase(req, res) {
    db.any('delete from purchases where purchase_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}




module.exports = {
    getAllProducts,
    getProductsByID,
    InsertProducts,
    UpdateProducts,
    DeleteProducts,
    getUsers,
    getUsersByID,
    InsertUsers,
    UpdateUsers,
    DeleteUsers,
    getPurchase_items,
    getPurchase_itemsByID,
    InsertPurchase_items,
    UpdatePurchase_items,
    DeletePurchase_items,
    getPurchase,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getPurchaseByID
   
    
}
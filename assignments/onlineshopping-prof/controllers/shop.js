const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
    res.render('shop/product-list', {
        prods: Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/',
    });
}

exports.getProducts = (req, res, next) => {
    res.render('shop/product-list', {
        prods: Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/',
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.prodId;
    console.log(prodId);
    console.log(Product.findById(prodId));
    res.render('shop/product-detail', {
        product: Product.findById(prodId),
        pageTitle: 'Product Detail',
        path: '/products',
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart'
    });
};


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}

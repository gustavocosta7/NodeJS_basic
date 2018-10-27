const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {



    //lista
    async index(req, res){
        // const products = await Product.find();
        const {page = 1} = req.query;
        const products = await Product.paginate({},{page, limit: 10});
        return res.json(products);
    },
    //detalhe
    async show(req, res){
        const products = await Product.findById(req.params.id);

        return res.json(products);
    },
    //atualiza
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});


        return res.json(product);

    },
    //deleta
    async delete(req, res){
        await  Product.findByIdAndRemove(req.params.id);

        return res.send();

    },

    //insere
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    }
};
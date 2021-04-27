const products = require('../products.json')

const getProduct = (req, res)=>{
    // console.log('PARAMS: ', req.params)
    // console.log('QUERY: ', req.query)
    // console.log('BODY: ', req.body)
    const foundIndex = products.find(product=> product.id === +req.params.id );
    console.log(foundIndex === true)
    if(!foundIndex) {
        return  res.status(500).send('Item not in list');
    }

    res.status(200).send(products[foundIndex])
}

module.exports = getProduct
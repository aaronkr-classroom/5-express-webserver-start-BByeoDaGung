exports.sendVegParam = (req, res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the <span style='color:purple'>${veg}</span style>`)
}

exports.sendVegParam = (req, res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the <span style='color:purple'>${veg}</span style>`)
}


exports.sendVegParam = (req, res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the <span style='color:purple'>${veg}</span style>`)
}


exports.sendVegParam = (req, res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the <span style='color:purple'>${veg}</span style>`)
}


exports.logRequestPAths = (req, res), next => {
    console.log(`request to: ${req.url}`);
    next();
}


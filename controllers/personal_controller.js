// GET /author
exports.author = function (req, res) {
    var errors = req.session.errors  || {};
    req.session.errors = {};

    res.render('personal/author', {errors: errors});
};

// GET /search
exports.search = function (req, res) {
    var errors = req.session.errors  || {};
    req.session.errors = {};

    res.render('personal/search', {errors: errors});
};

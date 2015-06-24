var models = require('../models/models.js');

var statistics = { quizzes: 0, comments: 0, mean: 0, commented: 0, uncommented: 0 };

// GET /statistics/show
exports.show = function (req, res, next) {
    models.Quiz.count().then(function (quizzes) {
        statistics.quizzes = quizzes;
        return models.Comment.count();
    }).then(function (comments) {
        statistics.comments = comments;
        statistics.mean = statistics.comments/statistics.quizzes;
        return models.Comment.countCommented();
    }).then(function (commented) {
        statistics.commented = commented;
        statistics.uncommented = statistics.quizzes - statistics.commented;
    }).then(function() { res.render('statistics/show', {statistics: statistics, errors: []});});
};

var models = require("../models/models.js");

//Autoload - factoriza el c�digo si la ruta incluye :quizId
exports.load = function (req, res, next, quizId) {
        models.Quiz.findById(quizId).then(
            function(quiz) {
                    if (quiz) {
                        req.quiz = quiz;
                        next();
                    } else {
                        next (new Error("No existe quizId=" + quizId));
                    }
            }).catch(function(error) { next(error);});
};
// GET /quizes
exports.index = function(req, res) {
    var busqueda = "%";
    if (req.query.search !== undefined) {
        //busqueda ="%" + req.query.search.toLowerCase().replace(/[\s]/ig,"%") + "%";
        busqueda ="%" + req.query.search.replace(/[\s]/ig,"%") + "%";
    }
    models.Quiz.findAll({where: ["pregunta like ?", busqueda]}).then(function(quizes) {
    res.render('quizes/index.ejs', { quizes: quizes.sort()});
}).catch(function(error) { next(error);});
};

// GET /quizes/:id
exports.show = function(req, res) {
  models.Quiz.findById(req.params.quizId).then(function(quiz) {
      res.render('quizes/show', {quiz: req.quiz});
  })
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
    models.Quiz.findById(req.params.quizId).then(function(quiz) {
        var resultado = "Incorrecto";
        if (req.query.respuesta.toLowerCase() === req.quiz.respuesta.toLowerCase()) {
            resultado = "Correcto";
        }
        res.render('quizes/answer', {quiz: quiz, respuesta: resultado});
    });
};

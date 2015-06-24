var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');
var personalController = require('../controllers/personal_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: [] });
});

// Autoload de comandos con :quizId
router.param("quizId", quizController.load);
router.param("commentId", commentController.load);

// Definici�n de rutas de session
router.get('/login', sessionController.new); // formulario de login
router.post('/login', sessionController.create); // crear sesi�n
router.get('/logout', sessionController.destroy); // cerrar sesi�n

// Definici�n de rutas
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', sessionController.loginRequired, quizController.new);
router.post('/quizes/create',  sessionController.loginRequired, quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',  sessionController.loginRequired, quizController.edit);
router.get('/author', personalController.author);
router.get('/search', personalController.search);
router.put('/quizes/:quizId(\\d+)',  sessionController.loginRequired, quizController.update);
router.delete('/quizes/:quizId(\\d+)',  sessionController.loginRequired, quizController.destroy);

// Definici�n de rutas de comentarios
router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);
router.get('/quizes/:quizId(\\d+)/comments/:commentId(\\d+)/publish',
                    sessionController.loginRequired, commentController.publish);

module.exports = router;

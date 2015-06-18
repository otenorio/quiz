// GET /quizes/question
exports.question = function(req, res) {
  res.render('quizes/question', {title: 'Quiz - Pregunta',pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function(req, res) {
  if (req.query.respuesta.toLowerCase() === 'roma') {
    res.render('quizes/answer', {title: 'Quiz - Respuesta', respuesta: 'Correcto'});
  }
  else {
    res.render('quizes/answer', {title: 'Quiz - Respuesta',respuesta: 'Incorrecto'});
  }
};

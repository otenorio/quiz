var users = { admin: {id:1, username: "admin", password: "1234"},
                         oscar: {id:2, username: "oscar", password: "oscar"},
                         pepe: {id:3, username: "pepe", password: "5678"}
};

// Comprueba si el usuario est� registrado en users
// Si autenticaci�n falla o hay errores se ejecuta callback (error).
exports.autenticar = function(login, password, callback) {
        if (users[login]) {
            if(password === users[login].password) {
                callback(null, users[login]);
            } else {
                callback (new Error('Password err�neo'));
            }
        } else {
            callback (new Error('Usuario err�neo'));
        }
};

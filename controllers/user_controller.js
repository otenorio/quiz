var users = { admin: {id:1, username: "admin", password: "admin"},
                         oscar: {id:2, username: "oscar", password: "oscar"}
};

// Comprueba si el usuario está registrado en users
// Si autenticación falla o hay errores se ejecuta callback (error).
exports.autenticar = function(login, password, callback) {
        if (users[login]) {
            if(password === users[login].password) {
                callback(null, users[login]);
            } else {
                callback (new Error('Password erróneo'));
            }
        } else {
            callback (new Error('Usuario erróneo'));
        }
};

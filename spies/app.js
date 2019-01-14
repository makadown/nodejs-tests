var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email exists

    // save user to database
    db.saveUser({email, password});
    // Send welcome email
};

// module.exports.app = app;
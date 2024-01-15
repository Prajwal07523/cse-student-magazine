const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect('mongodb+srv://01fe21bcs162:Prajwal%402025@cluster0.x1ozi0u.mongodb.net/Magazine', {
    useNewUrlParser: true,
});

// Define the User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
}, { collection: 'users' });
const User = mongoose.model('User', userSchema);

// User details
const username = 'mini8961';
const password = 'kletu@123';

// Hash the password and save the user
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        const newUser = new User({ username, password: hash });
        newUser.save()
            .then(user => {
                console.log('User saved:', user);
                mongoose.disconnect();
            })
            .catch(err => console.error(err));
    });
});

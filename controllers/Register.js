const User = require('../models/UserModel');
const bcrypt = require('bcrypt');




const handleRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;


        
        const existingUser = await User.findOne({ email });

        if (username !== "" && email !== "" && password !== "") {
            if (!existingUser) {
                const hashedPassword = await bcrypt.hash(password, 10);
                

                const newUser = new User({ username, email, password: hashedPassword });
                await newUser.save();
                res.status(201).json({ message: 'User created successfully'});
            } else {
                res.status(200).json({ message: 'User already exists'});
            }
        }
        else {
            res.status(200).json({ message: 'All credentials required'});
        }
    }

    catch (error) {
        console.log(error)
        res.json({ message: 'Internal server error' });
    }
};

module.exports = handleRegister;


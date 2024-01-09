
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authJwt = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.json({ message: 'Unauthorized' });
  }

  jwt.verify(token, `${secretKey}`, (err, decryptedToken) => {
    if (err) {
      return res.json({ message: 'meow' });
    }

    console.log(decryptedToken)
    req.userId = decryptedToken.userId
    console.log(req.userId)
    
    next(); 
  });
};

module.exports = authJwt;



const jwt = require('jsonwebtoken');
const secretKey = "thisismysecretkey";

const authJwt = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.json({ message: 'Unauthorized' });
  }

  jwt.verify(token, `${secretKey}`, (err, decryptedToken) => {
    if (err) {
      return res.json({ message: 'forbidden' });
    }

    console.log(decryptedToken)
    
    req.userId = decryptedToken.userId

    
    next(); 
  });
};

module.exports = authJwt;


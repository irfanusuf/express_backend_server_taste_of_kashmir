const multer = require('multer');            // multer manger file upload system 

const upload = multer({  dest: 'uploads/'  ,  limits: {
  fieldSize: 1024 * 1024 * 10, 
}, }); 

const multMidWare = upload.single('image')



module.exports = multMidWare;
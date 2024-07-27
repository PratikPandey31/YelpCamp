const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:'dvil17hw9',
    api_key:'283554989378183' ,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
    folder:'YelpCamp',
    allowedFormats: ['jpeg','png','jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}



const mongoose = require('mongoose');
const cities = require('./cities'); 
const { places, descriptors } = require('./seedHelpers'); 
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 2000) + 1000;
      const camp = new Campground({
        author: '668ecc7f9b03e454403d99fd' ,
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`,
        // image: `https://picsum.photos/400?random=${Math.random()}`,
        images: [
          {
            url: 'https://res.cloudinary.com/dvil17hw9/image/upload/v1721218355/YelpCamp/uu55ii3nuvqukyd0sxid.jpg',   
            filename: 'YelpCamp/uu55ii3nuvqukyd0sxid'
          },
          {
            url: 'https://res.cloudinary.com/dvil17hw9/image/upload/v1721218355/YelpCamp/uu55ii3nuvqukyd0sxid.jpg',   
            filename: 'YelpCamp/uu55ii3nuvqukyd0sxid'
          }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
        price
      })
      await camp.save();  
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

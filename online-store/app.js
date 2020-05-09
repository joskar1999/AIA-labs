const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const sequelize = require('./util/database');
const Product = require('./models/product');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({
  name: 'online-store',
  secret: 'session-secret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  if (!Array.isArray(req.session.cart)) {
    req.session.cart = [];
  }
  next();
});

app.use(productsRoutes);
app.use(cartRoutes);

app.use((req, res, next) => {
  res.render('main', {});
});

app.use((req, res, next) => {
  res.status(404).send('<html>Page not found!</html>');
});

sequelize.sync({force: true})
    .then(result => {
      Product.bulkCreate([
        {
          name: 'RPG-7',
          description: 'Ruska broń przeciwpancerna',
          imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Rpg-7.jpg',
          price: 3999.99
        },
        {
          name: 'FAMAS',
          description: 'Broń szturmowa prosto z Francji',
          imagePath: 'https://www.militaria.pl/upload/wysiwyg/gfx/produkty/ASG/CYBER_GUN/Karabinek_szturmowy_AEG_Cybergun_FAMAS_F1_400907/Karabinek-szturmowy-AEG-Cybergun-FAMAS-F1-400907-glowne1.jpg',
          price: 4299.99
        },
        {
          name: 'MP5',
          description: 'Z tej broni padł nie jeden terrorysta',
          imagePath: 'https://www.militaria.pl/upload/wysiwyg/gfx/produkty/ASG/Umarex/2_6311/Pistolet-maszynowy-EBB-HK-MP5-A5-26311.jpg',
          price: 5549.99
        },
        {
          name: 'HK-416',
          description: 'Z tej broni zabito Bin Ladena',
          imagePath: 'https://gunfire.com/pol_pl_Replika-karabinka-HK416-V2-1152214513_3.jpg',
          price: 6499.99
        },
        {
          name: 'M4',
          description: 'Podstawowa broń amerykańskich sił specjalnych',
          imagePath: 'https://doctorgun.eu/media/products/4f982f5fff8e227c850e17c63a121580/images/thumbnail/large_karabin-sportowy-walther-colt-m4-22-lr.jpg?lm=1558355783',
          price: 11199.99
        },
        {
          name: 'Dessert Eagle',
          description: 'Popularna giwera wśród bojówkarzy',
          imagePath: 'https://azteko.pl/images/1/we-replika-pistoletu-desert-eagle-50-ae-full-metal-silver-1.jpg',
          price: 1169.99
        },
        {
          name: 'Glock 17',
          description: 'Miałeś zły dzień? Ktoś kogo nim strzelisz będzie miał jeszcze gorszy',
          imagePath: 'https://www.specshop.pl/pol_pl_Pistolet-Glock-17-Gen-3-kal-9x19-mm-Para-17895_1.jpg',
          price: 999.99
        },
        {
          name: 'AK 47',
          description: 'Szeroko wykorzystywany przez Rosje oraz bojówki w Afganistanie',
          imagePath: 'https://f.allegroimg.com/s1024/0cdb4d/95773c364909b37bf872ae78250f',
          price: 2499.99
        }
      ]);
      app.listen(3000);
    })
    .catch(error => console.log(error));
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'PashaPrint - Reklam, Qablaşdırma, Seriqrafiya İşləri',
    page: 'home'
  });
});

app.get('/mehsullar', (req, res) => {
  res.render('index', {
    title: 'Məhsullar - PashaPrint',
    page: 'mehsullar'
  });
});

app.get('/haqqimizda', (req, res) => {
  res.render('index', {
    title: 'Haqqımızda - PashaPrint',
    page: 'haqqimizda'
  });
});

app.get('/xidmetler', (req, res) => {
  res.render('index', {
    title: 'Xidmətlər - PashaPrint',
    page: 'xidmetler'
  });
});

app.get('/qiymetler', (req, res) => {
  res.render('index', {
    title: 'Qiymətlər - PashaPrint',
    page: 'qiymetler'
  });
});

app.get('/elaqe', (req, res) => {
  res.render('index', {
    title: 'Əlaqə - PashaPrint',
    page: 'elaqe'
  });
});

app.listen(PORT, () => {
  console.log(`PashaPrint server ${PORT} portunda işləyir: http://localhost:${PORT}`);
});

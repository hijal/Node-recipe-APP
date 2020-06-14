const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/app');

const publicPath = path.join(__dirname, 'public');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', routes);

app.listen(port, () => {
    console.log('App listening on port ▶️ ' + port);
});

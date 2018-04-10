const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

var routes = require('./routes/index');

const app = express();

app.engine('.hbs', expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname,'public')));

app.use('/', routes);

app.listen(3000,() =>{
  console.log('Server is running on port 3000');
});

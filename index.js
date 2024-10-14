import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

// array for messages
var messages = [];

// send a get request, and return a response
app.get('/', (request, response) => {
    response.render('home', {messages});
    
});

app.post('/message', (request, response) => {
    messages.push(request.body.content);
    response.redirect('/');
});

app.listen(8001, () => {
    console.log('listening on http://localhost:8001');
});

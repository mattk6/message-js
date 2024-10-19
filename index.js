import express from 'express';
import { engine } from 'express-handlebars';
import 'dotenv/config';
import { db } from './database.cjs';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

// array for messages
var messages = [];
var connection = db();

//pull messages from db
connection.query('SELECT message FROM cuneteam.messages;', (err, rows, fields) => {
    if (err) throw err;

    rows.forEach(element => {
        messages.push(element.message);
    });

});

// send a get request, and return a response
app.get('/', (request, response) => {
    response.render('home', {messages});
    
});

app.post('/message', (request, response) => {
    
    var message = request.body.content;
    messages.push(message);

    //create parameterized sql statement
    const query = 'INSERT INTO `cuneteam`.`messages` (`message`) VALUES (?);';

    connection.query(query,message);

    response.redirect('/');
});

app.listen(8001, () => {
    console.log('listening on http://localhost:8001');
});

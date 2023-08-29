import express from 'express'
import hbs from 'hbs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

const port = process.env.PORT

//decimos que vamos a reenderizar las vistas con hbs
app.set('view engine', 'hbs');

//utilizamos los archivos parciales
hbs.registerPartials(__dirname + '/views/partials');

//para dar acceso a la ruta public de la app
app.use(express.static('public'));
  
// Ruta para la página principal
app.get('/', (req, res) => {
    // res.sendFile(`${__dirname}/public/index.html`);
    const items = {
        arr: [
            {
                name: 'Contact'
            }
        ]
    }

    res.render('home',{
        name: "Jorge Almarales",
        profession: "Dev",
        items
    })
});

app.get('/generic', (req, res) => {
    // res.sendFile(`${__dirname}/public/generic.html`);
    res.render('generic',{
        name: "Jorge Almarales",
        profession: "Dev"
    })
});

app.get('/elements', (req, res) => {
    // res.sendFile(`${__dirname}/public/elements.html`);
    res.render('elements',{
        name: "Jorge Almarales",
        profession: "Dev"
    })
});


app.listen(port)
import express from 'express'
import { create } from 'express-handlebars';
import exphbs from 'express-handlebars';
import path from 'path'
// Inicializaciones
const app = express()

// Importando rutas

import IndexRoutes from './routes'

// Configuraciones
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname,'views'));

const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
});
app.set('view engine', '.hbs');
app.engine('hbs', hbs.engine);

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Rutas
app.use('/books', IndexRoutes)
// Archivos estaticos
app.use(express.static(path.join(__dirname,'public')))

// Inicio del server
app.listen(app.get('port'),()=>{
    console.log(`Server en el puerto :${app.get('port')}`)
})
import express from 'express'
import HelloController from "./controllers/hello-controller.js";
import UserController from './controllers/users/user-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
HelloController(app)
UserController(app)
TuitsController(app)
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000)
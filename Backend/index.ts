// DEPENDENCIES
require('dotenv').config()
import express from 'express'
const app = express()
import path from 'path'
import cors from 'cors'
import { Sequelize } from 'sequelize'
const port = process.env.PORT || 4002;
import config from './config/config'
require('pg')

// CONFIGURATION / MIDDLEWARE
app.use(cors({
    origin: 'https://milestone-project-2-calender-frontend4.vercel.app',
  methods: 'GET,PUT,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../build")));

//CONTROLLERS
import eventsController from './controller/event_controller'
app.use('/api/events', eventsController)

import friendsController from './controller/friend_controller'
app.use('/api/friends', friendsController)

import usersController from './controller/user_controller'
app.use('/api/users', usersController)

import reportsController from './controller/report_controller'
app.use('/api/reports', reportsController)

//SERVER STATIC RENDERING
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "../build/index.html"));
     console.log(path.join(__dirname, "../build/index.html"))
    });

// LISTEN
app.listen(port, () => {
  console.log(`🎸 Rockin' on port: ${port}`)
})
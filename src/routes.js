const { Router } = require('express')
const PlayerController = require('./controllers/PlayerController')

const routes = Router();

routes.get('/Players', PlayerController.index)
routes.post('/Players', PlayerController.store)

module.exports = routes
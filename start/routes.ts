/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', [HomeController, 'index'])
router.get('/users', [UsersController, 'index'])

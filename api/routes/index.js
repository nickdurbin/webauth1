const loginRouter = require('./login/login-routes')
const registerRouter = require('./register/register-routes')
const userRouter = require('./users/user-routes')

module.exports = server => {
  server.use('/api/login', loginRouter)
  server.use('/api/register', registerRouter)
  server.use('/api/users', userRouter)
}
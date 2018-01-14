import createServer from './src/lib/server'

createServer().then(app => {
  app.listen(3000, () => {
  })
})
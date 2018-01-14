import createServer from './src/lib/createServer'

createServer().then(app => {
  app.listen(3000, () => {
  })
})
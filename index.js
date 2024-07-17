const jsonServer = require('json-server')

const mediaPlayerServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

PORT = 3000 || process.env.PORT

mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfuly at port number ${PORT}`);
})
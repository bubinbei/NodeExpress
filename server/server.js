import http from 'http'
import app from './app.js'
import colors from "colors";

const port = process.env.PORT ?? 5000
const server = http.createServer(app)


server.listen(port, () => {
  console.log(colors.yellow(`
          ／＞　  フ
　　　　　| 　_　 _| 
　 　　　／'ミ _x 彡 
　　 　 /　　　 　 | 
　　　 /　 ヽ　　 ﾉ 
　／￣|　　 |　|　| 
　| (￣ヽ＿_ヽ_)_)
server started at ${port} port
  `));
})

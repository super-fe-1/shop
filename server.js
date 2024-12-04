const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// json-server-auth 미들웨어 설정 (개발 환경에서만 사용)
if (process.env.NODE_ENV === 'development') {
  server.use(auth);
}

server.use(router);

server.listen(5001, () => {
  console.log('JSON Server with auth is running in development mode');
});

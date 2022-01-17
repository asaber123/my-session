const { createProxyMiddleware } = require('http-proxy-middleware');

//As I uploaded backend and front-end into two separate pages on Heroku, cors errors started to happen. 
//I therefore had to create a middleware where I could set proxy. 

module.exports = function(app) {
    app.use(
        ['/api*','/auth*'],
        createProxyMiddleware({
            target: 'https://mysessionlogapi.herokuapp.com',
            // target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
}; 
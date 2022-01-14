const { createProxyMiddleware } = require('http-proxy-middleware');

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
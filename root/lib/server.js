
//Runs the node server for development and advanced production
const express = require('express');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing');
const app = next({ dev });  // Whether to launch in dev mode (takes true or false)
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express()

    // custom route for posts
    server.get('/post/:id', (req, res) => {
      return app.render(req, res, '/post', {
        id: req.params.id
      });
    });

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname);

        app.serveStatic(req, res, filePath);
      } else {
        return handle(req, res);
      }
      
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })
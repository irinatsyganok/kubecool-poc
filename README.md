## Minimalist set up for a Node application with Express

## Components

View Engine - Express

Bundler - Webpack

Front End - React

---

## Local Build
To build the app locally, run: `npm run build`

To start the app in dev mode locally, run:  `npm run start`

---
## Docker Build
To build a Docker image: `docker build -t reactimage . ` 

To run using Docker:  `docker run -p 4000:80 reactimage ` 

This means that Docker image maps machine port to the container published on port 80

To get container ID, run `docker ps`

Print app output `docker logs <containerId>`

Example: running on http://localhost:8080
 

 ### To go inside Docker container
 Run `docker exec -it <containerId> /bin/bash`

### Test the app 
Get the port of the app that Docker mapped: `docker ps`

Example:  ....PORTS 0.0.0.0:4048->8080/tcp

Call the app using curl `curl -i localhost:4048`

```Example output: HTTP/1.1 200 OK
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Wed, 06 Dec 2017 15:31:57 GMT
ETag: W/"c6-1602c7471c8"
Content-Type: text/html; charset=UTF-8
Content-Length: 198
Date: Thu, 07 Dec 2017 10:15:42 GMT
Connection: keep-alive
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Node React app</title>
</head>
<body>
    <div id="container"> </div>
    <script src="/build/bundle.js"> </script>
</body>
</html>root@58fa5aa08f4f:/work#```
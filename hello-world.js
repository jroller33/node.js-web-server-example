// $(document).ready(() => {

  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Server running at http://${hostname}:${port}/`);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


  // $("#startServerBtn").on("click", function (event) {
  //   event.preventDefault();
  //   console.log("startServerBtn");
    
  // });

  // $("#openAddressBtn").on("click", function (event) {
  //   event.preventDefault();
  //   console.log("openAddressBtn");
  //   window.open("http://127.0.0.1:3000/", '_blank');

  // })

// });

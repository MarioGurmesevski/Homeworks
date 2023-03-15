const http = require('http');

const hostname = 'localhost';
const port = 3000;

const student_server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the student registry page</h1>');
        res.write('<p>Here is a link to the student registry page: <a href="http://localhost:3000/student">Student Page</a></p>');
        res.end();
    } else if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Student Information</h1>');
        res.write('<p>Student Name: John</p>');
        res.write('<p>Student Last Name: Doe</p>');
        res.write('<p>Academy: SEDC</p>');
        res.write('<p>Subject: Node JS</p>');
        res.end();
    } else {
        res.writeHead(404);
        res.write('<h1>Page not found</h1>');
        res.write('<p>Here is a link back: <a href="http://localhost:3000">Link back to main page</a></p>');
        res.end('');
    }
});

student_server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});

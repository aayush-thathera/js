// server.js
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Collect the incoming data
        req.on('data', chunk => {
            body += chunk.toString();  // Convert the Buffer into a string
        });

        // Once the data is completely received, process it
        req.on('end', () => {
            // Parse the form data using querystring
            const parsedData = querystring.parse(body);

            // Extract data from the parsed object
            const name = parsedData.name;
            const email = parsedData.email;

            // Handle the data (e.g., save to database, process, etc.)
            console.log(`Received Name: ${name}, Email: ${email}`);

            // Send a response back to the client
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Form Submitted Successfully!</h1><p>Thank you, your form was submitted.</p>');
        });
    } else {
        // Handle the default GET request (for the form page)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Submit Your Data</h1>
            <form action="/" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>

                <button type="submit">Submit</button>
            </form>
        `);
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

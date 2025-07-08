__Reflections__
The differnence between `res.send()` and `res.sendFile()` is that `res.send()` sends data (tex, JSON) directly to the browser. It is used for dynamic content like "Hello, World".
Whereas, `res.sendFile():` sends a file (HTML) from the server. It is used to serve static files like `index.html` because it handles file paths and MIME types in the right way.

__Reflections__
The differnence between `res.send()` and `res.sendFile()` is that `res.send()` sends data (tex, JSON) directly to the browser. It is used for dynamic content like "Hello, World".
Whereas, `res.sendFile():` sends a file (HTML) from the server. It is used to serve static files like `index.html` because it handles file paths and MIME(Multipurpose Internet Mail Extensions)
types in the right way.  For API responses or simple text use `res.send()`....for serving webpages and assests use res.sendFile().

The path module is necessary as it ensures that the file paths are correct across operating systems.`path.join(_dirname, "public", "index.html")` creates an absolute path --which prevents
errors.

Relative paths like `public/index.html` may fail if the working directory is changed or differs between systems--that would lead to the "file not found" errors.

To add a third page (like Menu Page):
    -steps: *Create a new file menu.html in the public folder and add some beginning content like <h1>Our Menu<h1> <p>Check our daily specials</p>
            *Add a route in server.js: app.get("/menu",(req,res) => { res.sendFile(path.join(_dirname, "public", "menu.html"));});
            *Save and restart the server (node server.js)
            *Test at http://localhost:3000/menu.
            *Enchance with adding CSS --add the styles in the `styles.css` file located in the `public` folder (if not yet created --create this file)  then link to your HTML with
            the standard <link rel="stylesheet" href="styles.css">

---------------------------------------------
Resources: [Express Docs](https://expressjs.com/)  or [Node.js Path Module](https://nodejs.org/api/path.html)


---------------------------------------------------------

